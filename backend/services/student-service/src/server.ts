import 'dotenv/config'; 
import express,{Request,Response} from'express';
import cors from'cors';
import helmet from'helmet';
const app=express();
app.use(cors(),helmet(),express.json());
const proxy=async(req:Request,res:Response)=>{
 const uid=req.header('x-user-id');const profileId=req.header('x-profile-id')||uid;if(!uid)return res.status(401).json({success:false});
 const requestPath=req.originalUrl.split('?')[0];
 let base='',path='';
 if(/^\/api\/v1\/students\/me\/(registrations|admit-cards|results|certificates)/.test(requestPath)){base=process.env.ACADEMIC_SERVICE_URL||'';
    path='/internal/v1/'+requestPath.split('/').slice(5).join('/');const join=path.includes('?')?'&':'?';
    path+=`${join}studentId=${profileId}`;}
 else if(/^\/api\/v1\/students\/me\/(orders|library)/.test(requestPath)){base=process.env.COMMERCE_SERVICE_URL||'';
    path=req.originalUrl;}
 else{base=process.env.IAM_SERVICE_URL||'';
    path=`/api/iam/students/${uid}`;}
 if(!base)return res.status(503).json({success:false});
 const u=await fetch(new URL(path,base),{method:req.method,headers:{'content-type':'application/json','x-internal-api-key':process.env.INTERNAL_API_KEY||'','x-user-id':uid,'x-profile-id':profileId||''},body:['GET','HEAD'].includes(req.method)?undefined:JSON.stringify({...req.body,studentId:profileId,registeredById:profileId})});
 const contentType=u.headers.get('content-type');if(contentType)res.setHeader('content-type',contentType);
 res.status(u.status).send(Buffer.from(await u.arrayBuffer()));
};
app.use('/api/v1/students/me',(q,s)=>void proxy(q,s));
app.get('/health',(_q,s)=>s.json({service:'student-service',status:'ok'}));
app.listen(Number(process.env.PORT||3007));
