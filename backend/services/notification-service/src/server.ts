import 'dotenv/config';
import { randomUUID } from 'node:crypto';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { QueryTypes, Sequelize } from 'sequelize';
import requestLogger from './middlewares/requestLogger';
import './logger';

const db = new Sequelize(process.env.MYSQL_DATABASE || 'edtech_platform', process.env.MYSQL_USER || 'root', process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST || 'localhost', port: Number(process.env.MYSQL_PORT || 3306), dialect: 'mysql', logging: false
});
const app = express(); app.use(cors(), helmet(), express.json(), requestLogger);
const uid = (req: Request) => req.header('x-user-id') || '';
const wrap = (fn: (req: Request, res: Response) => Promise<unknown>) => (req: Request, res: Response) => void fn(req, res).catch(e => { console.error(e); res.status(500).json({ success: false, error: { code: 'NOTIFICATION_ERROR', message: 'Internal server error' } }); });
app.get('/api/v1/notifications', wrap(async (req, res) => {
  if (!uid(req)) return res.status(401).json({ success: false });
  const rows = await db.query('SELECT id,type,subject,body,status,read_at AS readAt,created_at AS createdAt FROM notifications WHERE user_id=:uid ORDER BY created_at DESC LIMIT 100', { replacements: { uid: uid(req) }, type: QueryTypes.SELECT });
  res.json({ success: true, data: rows });
}));
app.patch('/api/v1/notifications/read-all', wrap(async (req, res) => { await db.query('UPDATE notifications SET read_at=COALESCE(read_at,NOW()) WHERE user_id=:uid', { replacements: { uid: uid(req) } }); res.json({ success: true }); }));
app.patch('/api/v1/notifications/:id/read', wrap(async (req, res) => { await db.query('UPDATE notifications SET read_at=COALESCE(read_at,NOW()) WHERE id=:id AND user_id=:uid', { replacements: { id: req.params.id, uid: uid(req) } }); res.json({ success: true }); }));
app.post('/api/v1/notifications/email/resend', wrap(async (req, res) => {
  const id = randomUUID(); await db.query("INSERT INTO notification_jobs(id,user_id,channel,template_key,payload,status) VALUES(:id,:uid,'EMAIL',:template,:payload,'QUEUED')", { replacements: { id, uid: uid(req), template: req.body.template || 'GENERIC', payload: JSON.stringify(req.body) } });
  res.status(202).json({ success: true, data: { jobId: id, status: 'QUEUED' } });
}));
app.post('/internal/v1/notifications', wrap(async (req, res) => {
  if (process.env.INTERNAL_API_KEY && req.header('x-internal-api-key') !== process.env.INTERNAL_API_KEY) return res.status(401).json({ success: false });
  const id = randomUUID(); await db.query(`INSERT INTO notification_jobs(id,user_id,channel,template_key,payload,status) VALUES(:id,:uid,:channel,:template,:payload,'QUEUED')`, { replacements: { id, uid: req.body.userId, channel: req.body.channel || 'EMAIL', template: req.body.template, payload: JSON.stringify(req.body.payload || {}) } });
  res.status(202).json({ success: true, data: { jobId: id } });
}));
app.get('/health', (_q, res) => res.json({ service: 'notification-service', status: 'ok' }));
const port = Number(process.env.PORT || 3005); db.authenticate().then(() => app.listen(port, () => console.log(`notification-service listening on ${port}`))).catch(e => { console.error(e); process.exit(1); });
