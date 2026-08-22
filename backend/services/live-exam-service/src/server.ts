import 'dotenv/config';
import { randomBytes, randomUUID } from 'node:crypto';
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
const uid = (req: Request) => { const id = req.header('x-profile-id') || req.header('x-user-id'); if (!id) throw Object.assign(new Error('Authentication required'), { status: 401 }); return id; };
const wrap = (fn: (req: Request, res: Response) => Promise<unknown>) => (req: Request, res: Response) => void fn(req, res).catch((e: Error & {status?:number}) => {
  console.error(e); res.status(e.status || 500).json({ success: false, error: { code: 'EXAM_ERROR', message: e.status ? e.message : 'Internal server error' } });
});
const ownedSession = async (id: string, userId: string) => {
  const rows = await db.query<Record<string, unknown>>(`SELECT es.*,er.student_id,e.duration_mins,e.total_marks FROM exam_sessions es JOIN exam_registrations er ON er.id=es.registration_id JOIN exams e ON e.id=er.exam_id WHERE es.id=:id AND er.student_id=:userId LIMIT 1`, { replacements: { id, userId }, type: QueryTypes.SELECT });
  if (!rows[0]) throw Object.assign(new Error('Exam session not found'), { status: 404 }); return rows[0];
};
app.get('/api/v1/mcq-exams/:examId/instructions', wrap(async (req, res) => {
  const rows = await db.query(`SELECT id,title,duration_mins AS durationMins,total_marks AS totalMarks,start_time AS startTime FROM exams WHERE id=:id AND status='PUBLISHED'`, { replacements: { id: req.params.examId }, type: QueryTypes.SELECT });
  if (!rows[0]) return res.status(404).json({ success: false, error: { code: 'EXAM_NOT_FOUND', message: 'Exam not found' } });
  res.json({ success: true, data: { ...rows[0], rules: ['Do not refresh or close the browser.', 'Answers are saved automatically.', 'The exam submits when time expires.'] } });
}));
app.post('/api/v1/mcq-exams/:examId/start', wrap(async (req, res) => {
  const userId = uid(req); const registrations = await db.query<{id:string;duration:number}>("SELECT er.id,e.duration_mins AS duration FROM exam_registrations er JOIN exams e ON e.id=er.exam_id WHERE er.exam_id=:examId AND er.student_id=:userId AND er.status='APPROVED'", { replacements: { examId: req.params.examId, userId }, type: QueryTypes.SELECT });
  if (!registrations[0]) throw Object.assign(new Error('Approved registration required'), { status: 403 });
  const existing = await db.query<{id:string}>("SELECT id FROM exam_sessions WHERE registration_id=:id AND status='ACTIVE'", { replacements: { id: registrations[0].id }, type: QueryTypes.SELECT });
  let sessionId = existing[0]?.id;
  if (!sessionId) {
    sessionId = randomUUID();
    await db.query("INSERT INTO exam_sessions(id,registration_id,session_token,status,time_remaining,ip_address,user_agent,started_at) VALUES(:id,:registrationId,:token,'ACTIVE',:duration,:ip,:ua,NOW())", { replacements: { id: sessionId, registrationId: registrations[0].id, token: randomBytes(32).toString('hex'), duration: registrations[0].duration * 60, ip: req.ip, ua: req.header('user-agent') || null } });
  }
  const questions = await db.query("SELECT id,question_text AS questionText,options,marks FROM questions WHERE exam_id=:examId AND status='PUBLISHED' ORDER BY display_order,id LIMIT 20", { replacements: { examId: req.params.examId }, type: QueryTypes.SELECT });
  res.status(201).json({ success: true, data: { sessionId, questions } });
}));
app.get('/api/v1/mcq-exams/sessions/:id/state', wrap(async (req, res) => {
  const session = await ownedSession(String(req.params.id), uid(req));
  const answers = await db.query('SELECT question_id AS questionId,selected_option AS selectedOption,saved_at AS savedAt FROM session_answers WHERE session_id=:id', { replacements: { id: req.params.id }, type: QueryTypes.SELECT });
  res.json({ success: true, data: { session, answers } });
}));
app.get('/api/v1/mcq-exams/sessions/:id/questions', wrap(async (req, res) => {
  await ownedSession(String(req.params.id), uid(req));
  const rows = await db.query("SELECT q.id,q.question_text AS questionText,q.options,q.marks FROM exam_sessions es JOIN exam_registrations er ON er.id=es.registration_id JOIN questions q ON q.exam_id=er.exam_id WHERE es.id=:id AND q.status='PUBLISHED' ORDER BY q.display_order,q.id", { replacements: { id: req.params.id }, type: QueryTypes.SELECT });
  res.json({ success: true, data: rows });
}));
app.put('/api/v1/mcq-exams/sessions/:id/answers', wrap(async (req, res) => {
  const session = await ownedSession(String(req.params.id), uid(req)); if (session.status !== 'ACTIVE') throw Object.assign(new Error('Session is closed'), { status: 409 });
  const answers = Array.isArray(req.body.answers) ? req.body.answers : [req.body];
  for (const answer of answers) await db.query('INSERT INTO session_answers(id,session_id,question_id,selected_option) VALUES(:id,:sessionId,:questionId,:selectedOption) ON DUPLICATE KEY UPDATE selected_option=VALUES(selected_option),saved_at=NOW()', { replacements: { id: randomUUID(), sessionId: req.params.id, questionId: answer.questionId, selectedOption: answer.selectedOption } });
  res.json({ success: true, meta: { saved: answers.length } });
}));
app.post('/api/v1/mcq-exams/sessions/:id/heartbeat', wrap(async (req, res) => { await ownedSession(String(req.params.id), uid(req)); await db.query('UPDATE exam_sessions SET last_heartbeat_at=NOW() WHERE id=:id', { replacements: { id: req.params.id } }); res.json({ success: true, data: { serverTime: new Date().toISOString() } }); }));
app.post('/api/v1/mcq-exams/sessions/:id/flag-event', wrap(async (req, res) => { await ownedSession(String(req.params.id), uid(req)); await db.query('INSERT INTO exam_integrity_events(id,session_id,event_type,metadata) VALUES(:id,:sessionId,:type,:metadata)', { replacements: { id: randomUUID(), sessionId: req.params.id, type: req.body.type || 'UNKNOWN', metadata: JSON.stringify(req.body.metadata || {}) } }); await db.query('UPDATE exam_sessions SET is_flagged=1 WHERE id=:id', { replacements: { id: req.params.id } }); res.status(201).json({ success: true }); }));
app.post('/api/v1/mcq-exams/sessions/:id/submit', wrap(async (req, res) => {
  await ownedSession(String(req.params.id), uid(req));
  const scores = await db.query<{score:number}>('SELECT COALESCE(SUM(CASE WHEN sa.selected_option=q.correct_option THEN q.marks ELSE 0 END),0) AS score FROM session_answers sa JOIN questions q ON q.id=sa.question_id WHERE sa.session_id=:id', { replacements: { id: req.params.id }, type: QueryTypes.SELECT });
  await db.transaction(async t => {
    await db.query("UPDATE exam_sessions SET status='SUBMITTED',completed_at=NOW(),time_remaining=0 WHERE id=:id AND status='ACTIVE'", { replacements: { id: req.params.id }, transaction: t });
    await db.query("UPDATE exam_registrations er JOIN exam_sessions es ON es.registration_id=er.id SET er.result_score=:score,er.result_status='DRAFT' WHERE es.id=:id", { replacements: { id: req.params.id, score: Number(scores[0]?.score || 0) }, transaction: t });
  });
  res.json({ success: true, data: { score: Number(scores[0]?.score || 0), status: 'SUBMITTED' } });
}));
app.get('/health', (_q, res) => res.json({ service: 'live-exam-service', status: 'ok' }));
const port = Number(process.env.PORT || 3004); db.authenticate().then(() => app.listen(port, () => console.log(`live-exam-service listening on ${port}`))).catch(e => { console.error(e); process.exit(1); });
