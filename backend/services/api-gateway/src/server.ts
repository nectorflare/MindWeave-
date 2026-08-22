import 'dotenv/config';
import { randomUUID } from 'node:crypto';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import requestLogger from './middlewares/requestLogger';
import './logger';

const app = express();
const port = Number(process.env.PORT || 3000);

const targets: Array<[string, string | undefined]> = [
  ['/api/v1/admin', process.env.ADMIN_SERVICE_URL],
  ['/api/v1/auth', process.env.IAM_SERVICE_URL],
  ['/api/v1/students', process.env.STUDENT_SERVICE_URL],
  ['/api/v1/schools', process.env.SCHOOL_SERVICE_URL],
  ['/api/v1/public', process.env.CMS_SERVICE_URL],
  ['/api/v1/subjects', process.env.ACADEMIC_SERVICE_URL],
  ['/api/v1/exams', process.env.ACADEMIC_SERVICE_URL],
  ['/api/v1/online-tests', process.env.ACADEMIC_SERVICE_URL],
  ['/api/v1/payments', process.env.COMMERCE_SERVICE_URL],
  ['/api/v1/books', process.env.COMMERCE_SERVICE_URL],
  ['/api/v1/cart', process.env.COMMERCE_SERVICE_URL],
  ['/api/v1/orders', process.env.COMMERCE_SERVICE_URL],
  ['/api/v1/mcq-exams', process.env.LIVE_EXAM_SERVICE_URL],
  ['/api/v1/notifications', process.env.NOTIFICATION_SERVICE_URL],
  ['/api/v1/uploads', process.env.FILE_SERVICE_URL],
  ['/api/v1/files', process.env.FILE_SERVICE_URL]
];

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(requestLogger);
app.use((req, res, next) => {
  const requestId = req.header('x-request-id') || randomUUID();
  req.headers['x-request-id'] = requestId;
  res.setHeader('x-request-id', requestId);
  next();
});
app.use('/api/v1', (req, res, next) => {
  const publicRequest =
    req.path.startsWith('/public/') ||
    req.path === '/auth/student/login' ||
    req.path === '/auth/school/login' ||
    req.path === '/auth/student/register' ||
    req.path === '/auth/school/register' ||
    req.path === '/admin/auth/login' ||
    req.path === '/auth/password/request-reset' ||
    req.path === '/auth/password/reset' ||
    (req.path.startsWith('/online-tests') && (req.method === 'GET' || req.path.endsWith('/submit'))) ||
    (req.method === 'GET' && (req.path.startsWith('/subjects') || req.path.startsWith('/exams') || req.path.startsWith('/books'))) ||
    req.path === '/payments/webhooks';
  if (publicRequest) return next();
  const token = req.header('authorization')?.replace(/^Bearer\s+/i, '');
  try {
    if (!token) throw new Error('missing token');
    const secret = req.path.startsWith('/admin') ? (process.env.ADMIN_JWT_SECRET || process.env.JWT_SECRET || '') : (process.env.JWT_SECRET || '');
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === 'string' || !decoded.userId || !decoded.role) throw new Error('invalid claims');
    req.headers['x-user-id'] = String(decoded.userId);
    if (decoded.profileId) req.headers['x-profile-id'] = String(decoded.profileId);
    req.headers['x-user-role'] = String(decoded.role);
    if (Array.isArray(decoded.permissions)) req.headers['x-user-permissions'] = decoded.permissions.join(',');
    next();
  } catch {
    res.status(401).json({ success: false, error: { code: 'UNAUTHENTICATED', message: 'Valid access token required' } });
  }
});

const proxy = async (req: Request, res: Response) => {
  const match = targets.find(([prefix]) => req.originalUrl.startsWith(prefix));
  if (!match?.[1]) {
    res.status(503).json({ success: false, error: { code: 'SERVICE_UNAVAILABLE', message: 'Destination service is not configured' } });
    return;
  }
  let upstreamPath = req.originalUrl;
  if (match[0] === '/api/v1/auth') {
    upstreamPath = upstreamPath
      .replace(/^\/api\/v1\/auth\/(student|school)\/login/, '/api/iam/login')
      .replace(/^\/api\/v1\/auth\/student\/register/, '/api/iam/register-user')
      .replace(/^\/api\/v1\/auth\/school\/register/, '/api/iam/register-school')
      .replace(/^\/api\/v1\/auth\/password\//, '/api/iam/password/');
  }
  const url = new URL(upstreamPath, match[1]);
  const headers: Record<string, string> = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (
      typeof value === 'string' &&
      !['host', 'content-length', 'connection', 'expect', 'keep-alive', 'proxy-authenticate',
        'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade'].includes(key)
    ) headers[key] = value;
  }
  try {
    let body: BodyInit | undefined;
    if (!['GET', 'HEAD'].includes(req.method)) {
      if (req.is('multipart/form-data')) {
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        body = Buffer.concat(chunks);
      } else body = JSON.stringify(req.body);
    }
    const upstream = await fetch(url, {
      method: req.method,
      headers,
      body,
      signal: AbortSignal.timeout(Number(process.env.PROXY_TIMEOUT_MS || 15000))
    });
    res.status(upstream.status);
    upstream.headers.forEach((value, key) => {
      if (!['content-encoding', 'transfer-encoding', 'connection'].includes(key)) res.setHeader(key, value);
    });
    res.send(Buffer.from(await upstream.arrayBuffer()));
  } catch (error) {
    console.error('Gateway proxy error', error);
    res.status(502).json({ success: false, error: { code: 'BAD_GATEWAY', message: 'Upstream service is unavailable' } });
  }
};

app.get('/health', (_req, res) => res.json({ service: 'api-gateway', status: 'ok' }));
app.use('/api/v1', (req, res) => void proxy(req, res));
app.use((_req, res) => res.status(404).json({ success: false, error: { code: 'ROUTE_NOT_FOUND', message: 'Route not found' } }));
app.listen(port, () => console.log(`api-gateway listening on ${port}`));
