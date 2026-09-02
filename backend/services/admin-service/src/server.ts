import 'dotenv/config';
import { randomUUID, scryptSync, timingSafeEqual } from 'node:crypto';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import { QueryTypes, Sequelize } from 'sequelize';
import multer from 'multer';
import * as XLSX from 'xlsx';
import { httpErrorResponse } from './httpError';
const { bootstrapProductionAdmin } = require('../../../scripts/bootstrap-production-admin') as {
  bootstrapProductionAdmin: (options: { requireCredentials: boolean }) => Promise<{ skipped?: boolean; adminId?: string; email?: string }>;
};

const db = new Sequelize(process.env.MYSQL_DATABASE || 'edtech_platform', process.env.MYSQL_USER || 'root', process.env.MYSQL_PASSWORD, { host: process.env.MYSQL_HOST || 'localhost', port: Number(process.env.MYSQL_PORT || 3306), dialect: 'mysql', logging: false });
const app = express(); app.use(cors(), helmet(), express.json({ limit: '10mb' }));
const wrap = (fn:(q:Request,s:Response)=>Promise<unknown>) => (q:Request,s:Response)=>void fn(q,s).catch(e=>{console.error(e);const response=httpErrorResponse(e);s.status(response.status).json(response.body)});
const auth = (req:Request,res:Response,next:()=>void) => {
  if (req.path.startsWith('/auth/login')) return next();
  try { const token=req.header('authorization')?.replace(/^Bearer /i,''); const data=jwt.verify(token||'',process.env.ADMIN_JWT_SECRET||process.env.JWT_SECRET||'') as jwt.JwtPayload; if(!data.userId) throw 0; req.headers['x-admin-id']=String(data.userId); next(); } catch { res.status(401).json({success:false,error:{code:'UNAUTHENTICATED',message:'Admin authentication required'}}); }
};
const audit = async(req:Request,status:number,entity?:string,entityId?:string)=>db.query('INSERT INTO audit_logs(id,actor_id,action,entity_type,entity_id,ip_address,metadata) VALUES(:id,:actor,:action,:entity,:entityId,:ip,:meta)',{replacements:{id:randomUUID(),actor:req.header('x-admin-id')||null,action:`${req.method} ${req.path}`,entity:entity||null,entityId:entityId||null,ip:req.ip,meta:JSON.stringify({status})}}).catch(()=>undefined);
app.post('/api/v1/admin/auth/login',wrap(async(req,res)=>{
  const rows=await db.query<{id:string;email:string;password_hash:string;status:string;permissions:string}>('SELECT s.id,s.email,s.password_hash,s.status,JSON_ARRAYAGG(rp.permission_key) AS permissions FROM admin_staff s LEFT JOIN admin_staff_roles sr ON sr.staff_id=s.id LEFT JOIN role_permissions rp ON rp.role_id=sr.role_id WHERE s.email=:email GROUP BY s.id',{replacements:{email:req.body.email},type:QueryTypes.SELECT});
  const u=rows[0]; const [salt,hash]=String(u?.password_hash||'').split(':'); const actual=scryptSync(String(req.body.password||''),salt||'',32); if(!u||u.status!=='ACTIVE'||!hash||!timingSafeEqual(actual,Buffer.from(hash,'hex'))) return res.status(401).json({success:false,error:{code:'INVALID_CREDENTIALS',message:'Invalid credentials'}});
  const permissions=typeof u.permissions==='string'?JSON.parse(u.permissions):u.permissions; const token=jwt.sign({userId:u.id,email:u.email,role:'ADMIN_STAFF',permissions},process.env.ADMIN_JWT_SECRET||process.env.JWT_SECRET||'',{expiresIn:'15m'}); res.json({success:true,data:{accessToken:token}});
}));
app.post('/api/v1/admin/auth/logout',(_q,res)=>res.status(204).send());
app.post('/api/v1/admin/auth/refresh-token',(_q,res)=>res.status(501).json({success:false,error:{code:'NOT_CONFIGURED',message:'Admin refresh-token store must be configured'}}));
app.use('/api/v1/admin',auth);
const questionPaperUpload=multer({storage:multer.memoryStorage(),limits:{fileSize:5*1024*1024},fileFilter:(_req,file,done)=>done(null,/\.(csv|xlsx)$/i.test(file.originalname))});
app.post('/api/v1/admin/question-papers/upload',questionPaperUpload.single('file'),wrap(async(req,res)=>{
  const paperName=String(req.body.paperName||'').trim(),classLabel=String(req.body.classLabel||'').trim();
  if(!paperName||!classLabel||!req.file)return res.status(400).json({success:false,error:{code:'VALIDATION_ERROR',message:'paperName, classLabel and a CSV/XLSX file are required'}});
  const workbook=XLSX.read(req.file.buffer,{type:'buffer'}),sheet=workbook.Sheets[workbook.SheetNames[0]];
  const source=XLSX.utils.sheet_to_json<Record<string,unknown>>(sheet,{defval:''});
  const value=(row:Record<string,unknown>,key:string)=>{const found=Object.keys(row).find(item=>item.replace(/[\s_-]/g,'').toLowerCase()===key.toLowerCase());return String(found?row[found]:'').trim()};
  const questions=source.map((row,index)=>{const options={A:value(row,'optiona'),B:value(row,'optionb'),C:value(row,'optionc'),D:value(row,'optiond')},questionText=value(row,'question'),rawAnswer=value(row,'correctanswer');let correctOption=rawAnswer.toUpperCase();if(!['A','B','C','D'].includes(correctOption)){const match=Object.entries(options).find(([,text])=>text.toLowerCase()===rawAnswer.toLowerCase());correctOption=match?.[0]||''}const marks=Number(value(row,'marks')||1);if(!questionText||Object.values(options).some(option=>!option)||!correctOption||!Number.isFinite(marks)||marks<=0)throw Object.assign(new Error(`Invalid data in spreadsheet row ${index+2}`),{status:400});return{questionText,options,correctOption,marks,displayOrder:index+1,status:'PUBLISHED'}});
  if(!questions.length)return res.status(400).json({success:false,error:{code:'EMPTY_FILE',message:'The spreadsheet contains no questions'}});
  const academic=process.env.ACADEMIC_SERVICE_URL;if(!academic)return res.status(503).json({success:false,error:{code:'SERVICE_UNAVAILABLE',message:'Academic service is not configured'}});
  const headers={'content-type':'application/json','x-internal-api-key':process.env.INTERNAL_API_KEY||''};
  const call=async(path:string,init:RequestInit={})=>{const response=await fetch(new URL(`/internal/v1${path}`,academic),{...init,headers:{...headers,...(init.headers||{})}});const payload=await response.json() as {success:boolean;data?:any;error?:{message?:string}};if(!response.ok)throw Object.assign(new Error(payload.error?.message||'Academic service request failed'),{status:response.status});return payload};
  const subjects=await call('/subjects');let subject=subjects.data.find((item:{code?:string})=>item.code==='ONLINE-TESTS');
  if(!subject)subject=(await call('/subjects',{method:'POST',body:JSON.stringify({name:'Online Tests',code:'ONLINE-TESTS',description:'Question papers uploaded for online tests',status:'PUBLISHED'})})).data;
  const totalMarks=questions.reduce((total,question)=>total+question.marks,0),durationMins=Math.max(1,Number(req.body.durationMinutes||60));
  const exam=(await call('/exams',{method:'POST',body:JSON.stringify({subjectId:subject.id,title:paperName,description:`Online test for ${classLabel}`,mode:'ONLINE',startTime:new Date().toISOString(),durationMins,totalMarks,fee:0,status:'DRAFT',eligibilityCriteria:{onlineTest:true,classGrades:[classLabel]}})})).data;
  await call('/questions/import',{method:'POST',body:JSON.stringify({examId:exam.id,questions})});
  await call(`/exams/${exam.id}`,{method:'PUT',body:JSON.stringify({status:'PUBLISHED'})});
  await audit(req,201,'online_test',exam.id);res.status(201).json({success:true,data:{examId:exam.id,paperName,classLabel,questionCount:questions.length,totalMarks,durationMins}});
}));
app.get('/api/v1/admin/roles',wrap(async(_q,res)=>res.json({success:true,data:await db.query('SELECT * FROM admin_roles',{type:QueryTypes.SELECT})})));
app.post('/api/v1/admin/roles',wrap(async(req,res)=>{const id=randomUUID();await db.query('INSERT INTO admin_roles(id,name,description) VALUES(:id,:name,:description)',{replacements:{id,name:req.body.name,description:req.body.description||null}});await audit(req,201,'role',id);res.status(201).json({success:true,data:{id}})}));
app.put('/api/v1/admin/roles/:id',wrap(async(req,res)=>{await db.query('UPDATE admin_roles SET name=:name,description=:description WHERE id=:id',{replacements:{id:req.params.id,name:req.body.name,description:req.body.description||null}});res.json({success:true})}));
app.get('/api/v1/admin/staff',wrap(async(_q,res)=>res.json({success:true,data:await db.query('SELECT id,email,name,status,created_at AS createdAt FROM admin_staff',{type:QueryTypes.SELECT})})));
app.post('/api/v1/admin/staff',wrap(async(req,res)=>{const id=randomUUID(),salt=randomUUID(),hash=scryptSync(req.body.password,salt,32).toString('hex');await db.query("INSERT INTO admin_staff(id,email,name,password_hash,status) VALUES(:id,:email,:name,:hash,'ACTIVE')",{replacements:{id,email:req.body.email,name:req.body.name,hash:`${salt}:${hash}`}});res.status(201).json({success:true,data:{id}})}));
app.patch('/api/v1/admin/staff/:id/status',wrap(async(req,res)=>{await db.query('UPDATE admin_staff SET status=:status WHERE id=:id',{replacements:{id:req.params.id,status:req.body.status}});res.json({success:true})}));
app.get('/api/v1/admin/system/audit-logs',wrap(async(req,res)=>res.json({success:true,data:await db.query('SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT 500',{type:QueryTypes.SELECT})})));
app.get('/api/v1/admin/system/settings',wrap(async(_req,res)=>res.json({success:true,data:await db.query('SELECT setting_key AS settingKey,setting_value AS settingValue,updated_at AS updatedAt FROM system_settings',{type:QueryTypes.SELECT})})));
app.put('/api/v1/admin/system/settings',wrap(async(req,res)=>{for(const [key,value]of Object.entries(req.body))await db.query('INSERT INTO system_settings(setting_key,setting_value)VALUES(:key,:value) ON DUPLICATE KEY UPDATE setting_value=VALUES(setting_value)',{replacements:{key,value:JSON.stringify(value)}});await audit(req,200,'system_settings');res.json({success:true})}));
const proxyMap:Array<[RegExp,string|undefined,string]>=[
  [/^\/(students|schools)/,process.env.IAM_SERVICE_URL,'/api'],
  [/^\/(catalog|registrations|admit-cards|results|question-bank)/,process.env.ACADEMIC_SERVICE_URL,'/internal/v1'],
  [/^\/(books|book-orders|finance)/,process.env.COMMERCE_SERVICE_URL,'/internal/v1'],
  [/^\/cms/,process.env.CMS_SERVICE_URL,'/internal/v1'],
  [/^\/notifications/,process.env.NOTIFICATION_SERVICE_URL,'/internal/v1'],
  [/^\/(dashboard|reports)/,process.env.ANALYTICS_SERVICE_URL,'/internal/v1']
];
app.use('/api/v1/admin',wrap(async(req,res)=>{
  const match=proxyMap.find(([r])=>r.test(req.path)); if(!match?.[1]) return res.status(503).json({success:false,error:{code:'SERVICE_UNAVAILABLE',message:'Admin domain is not configured'}});
  const domainPath=req.path.replace(/^\/catalog/,'').replace(/^\/question-bank\/questions/,'/questions').replace(/^\/question-bank\/import/,'/questions/import');
  const upstream=await fetch(new URL(match[2]+domainPath+(req.url.includes('?')?req.url.slice(req.url.indexOf('?')):''),match[1]),{method:req.method,headers:{'content-type':'application/json','x-internal-api-key':process.env.INTERNAL_API_KEY||'','x-admin-id':req.header('x-admin-id')||''},body:['GET','HEAD'].includes(req.method)?undefined:JSON.stringify(req.body)});
  await audit(req,upstream.status);res.status(upstream.status).send(Buffer.from(await upstream.arrayBuffer()));
}));
app.get('/health',(_q,res)=>res.json({service:'admin-service',status:'ok'}));
db.authenticate()
  .then(async () => {
    const result = await bootstrapProductionAdmin({ requireCredentials: process.env.NODE_ENV === 'production' });
    if (!result.skipped) console.log(`Production admin ready: ${result.email} (${result.adminId})`);
    app.listen(Number(process.env.PORT || 3006), () => console.log('admin-service listening'));
  })
  .catch(e => { console.error(e); process.exit(1); });
