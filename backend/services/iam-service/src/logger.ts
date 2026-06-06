import fs from 'node:fs';
import path from 'node:path';

interface RequestLogData {
  method: string;
  url: string;
  statusCode: number;
  ip: string;
  userAgent: string;
  responseTime: number;
}

const logDir = path.join(__dirname, '..', 'logs');
const requestLogDir = path.join(logDir, 'requests');

fs.mkdirSync(requestLogDir, { recursive: true });

const appLogStream = fs.createWriteStream(path.join(logDir, 'app.log'), { flags: 'a' });
const errorLogStream = fs.createWriteStream(path.join(logDir, 'error.log'), { flags: 'a' });
const requestLogStream = fs.createWriteStream(path.join(requestLogDir, 'requests.log'), { flags: 'a' });

const getTimestamp = () => new Date().toISOString();

const stringifyArgs = (args: unknown[]) => args.map(arg => {
  if (arg && typeof arg === 'object') {
    try {
      return JSON.stringify(arg);
    } catch (_err) {
      return String(arg);
    }
  }

  return String(arg);
});

export const logRequest = (requestData: RequestLogData) => {
  const timestamp = new Date().toISOString();
  const { method, url, statusCode, ip, userAgent, responseTime } = requestData;

  requestLogStream.write(
    `[${timestamp}] ${method} ${url} - ${statusCode} - ${responseTime}ms - IP: ${ip} - UA: ${userAgent}\n`
  );
};

const originalConsoleLog = console.log;
console.log = (...args: unknown[]) => {
  appLogStream.write(`[${getTimestamp()}] ${stringifyArgs(args).join(' ')}\n`);
  originalConsoleLog(...args);
};

const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  const msg = `[${getTimestamp()}] ${stringifyArgs(args).join(' ')}\n`;
  appLogStream.write(msg);
  errorLogStream.write(msg);
  originalConsoleError(...args);
};
