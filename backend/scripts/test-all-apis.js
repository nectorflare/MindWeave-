const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const runStamp = new Date().toISOString().replace(/[:.]/g, '-');
const logPath = path.join(root, `api-test-output-${runStamp}.log`);
const id = '00000000-0000-4000-8000-000000000001';
const seedUserId = '10000000-0000-4000-8000-000000000002';
const seedBookId = '10000000-0000-4000-8000-000000000a01';
const seedPaymentId = '10000000-0000-4000-8000-000000000501';
const services = [
  ['api-gateway', 3000],
  ['iam-service', 3001],
  ['academic-service', 3002],
  ['commerce-service', 3003],
  ['live-exam-service', 3004],
  ['notification-service', 3005],
  ['admin-service', 3006],
  ['student-service', 3007],
  ['school-service', 3008],
  ['cms-service', 3009],
  ['file-service', 3010],
  ['analytics-service', 3011]
];
const baseEnv = {
  ...process.env,
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
  MYSQL_PORT: process.env.MYSQL_PORT || '3306',
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'edtech_platform',
  MYSQL_USER: process.env.MYSQL_USER || 'root',
  INTERNAL_API_KEY: process.env.INTERNAL_API_KEY || 'change-this-internal-api-key',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret-in-env',
  FILE_SIGNING_SECRET: process.env.FILE_SIGNING_SECRET || 'change-this-file-secret',
  IAM_SERVICE_URL: 'http://localhost:3001',
  ACADEMIC_SERVICE_URL: 'http://localhost:3002',
  COMMERCE_SERVICE_URL: 'http://localhost:3003',
  LIVE_EXAM_SERVICE_URL: 'http://localhost:3004',
  NOTIFICATION_SERVICE_URL: 'http://localhost:3005',
  ADMIN_SERVICE_URL: 'http://localhost:3006',
  STUDENT_SERVICE_URL: 'http://localhost:3007',
  SCHOOL_SERVICE_URL: 'http://localhost:3008',
  CMS_SERVICE_URL: 'http://localhost:3009',
  FILE_SERVICE_URL: 'http://localhost:3010',
  ANALYTICS_SERVICE_URL: 'http://localhost:3011'
};

const append = line => fs.appendFileSync(logPath, `${line}\n`);
const body = {
  name: 'API Smoke Test', title: 'API Smoke Test', description: 'Automated smoke test',
  email: 'api-smoke@example.test', emailId: 'api-smoke@example.test', password: 'Invalid-Test-Password-1!',
  message: 'Automated smoke test', question: 'Test question?', answer: 'Test answer',
  status: 'ACTIVE', type: 'TEST', amount: 1, price: 1, rating: 5, quantity: 1,
  fileName: 'test.txt', contentType: 'text/plain', size: 1, fileId: id,
  examId: id, studentId: seedUserId, userId: seedUserId, registrationId: id,
  transactionId: seedPaymentId, referenceId: seedBookId, bookId: seedBookId,
  orderId: seedPaymentId, paymentId: 'seed-smoke-payment',
  channel: 'EMAIL', template: 'SEED_SMOKE_TEST',
  answers: [], filters: {}, metadata: {}
};

function discover() {
  const found = [{ service: 'api-gateway', port: 3000, method: 'GET', route: '/health' }];
  for (const [service, port] of services.filter(([name]) => name !== 'api-gateway')) {
    const src = path.join(root, 'services', service, 'src');
    if (!fs.existsSync(src)) continue;
    const files = [];
    const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
      const target = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(target);
      else if (entry.name.endsWith('.ts')) files.push(target);
    });
    walk(src);
    for (const file of files) {
      const text = fs.readFileSync(file, 'utf8');
      const routePrefix = service === 'iam-service' ? '/api/iam'
        : service === 'academic-service' && file.endsWith(`${path.sep}routes${path.sep}index.ts`) ? '/api'
        : service === 'academic-service' && file.endsWith(`${path.sep}routes${path.sep}internal.ts`) ? '/internal/v1'
        : '';
      const re = /(?:app|router)\.(get|post|put|patch|delete)\(\s*['"`]([^'"`]+)['"`]/gi;
      for (const match of text.matchAll(re)) {
        let route = `${routePrefix}${match[2]}`.replace(/:([A-Za-z][\w]*)/g, id);
        found.push({ service, port, method: match[1].toUpperCase(), route });
      }
    }
  }
  for (const resource of ['banners', 'offers', 'faqs']) {
    found.push({ service: 'cms-service', port: 3009, method: 'GET', route: `/api/v1/public/${resource}` });
  }
  for (const route of ['/api/v1/students/me', '/api/v1/schools/me']) {
    found.push({ service: route.includes('students') ? 'student-service' : 'school-service', port: route.includes('students') ? 3007 : 3008, method: 'GET', route });
  }
  const key = x => `${x.port}|${x.method}|${x.route}`;
  return [...new Map(found.map(x => [key(x), x])).values()]
    .sort((a, b) => a.port - b.port || a.route.localeCompare(b.route) || a.method.localeCompare(b.method));
}

async function fetchText(url, options = {}, timeout = 10000) {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(timeout) });
  return { status: response.status, text: await response.text() };
}

async function main() {
  fs.writeFileSync(logPath, `API test run - ${new Date().toISOString()}\n`);
  append('Scope: every explicit HTTP API route discovered in services/*/src, plus generated CMS routes and proxy base routes.');
  append('Waiting for server availability...');
  const children = services.map(([service, port]) => spawn(process.execPath, ['dist/server.js'], {
    cwd: path.join(root, 'services', service),
    env: { ...baseEnv, PORT: String(port) },
    stdio: ['ignore', 'ignore', 'pipe'],
    windowsHide: true
  }));
  const errors = new Map();
  children.forEach((child, index) => child.stderr.on('data', chunk => {
    const name = services[index][0];
    errors.set(name, `${errors.get(name) || ''}${chunk}`.slice(-2000));
  }));
  try {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const available = new Map();
    for (const [service, port] of services) {
      try {
        const result = await fetchText(`http://localhost:${port}/health`, {}, 3000);
        available.set(service, true);
        append(`Server ${service} up: true (${result.status})`);
      } catch (error) {
        available.set(service, false);
        append(`Server ${service} up: false (${error.message})`);
        const detail = errors.get(service);
        if (detail) append(`Startup error: ${detail.replace(/\s+/g, ' ').trim()}`);
      }
    }

    let total = 0, non5xx = 0, serverErrors = 0, connectionErrors = 0;
    for (const test of discover()) {
      total++;
      append(`--- REQUEST [${test.service}] ${test.method} ${test.route}`);
      if (!available.get(test.service)) {
        connectionErrors++;
        append('Status: CONNECTION_ERROR');
        append('Body: Service was not available at test time');
        continue;
      }
      const headers = {
        'content-type': 'application/json',
        'x-user-id': seedUserId,
        'x-internal-api-key': baseEnv.INTERNAL_API_KEY
      };
      try {
        const options = { method: test.method, headers };
        if (!['GET', 'HEAD'].includes(test.method)) options.body = JSON.stringify(body);
        const result = await fetchText(`http://localhost:${test.port}${test.route}`, options);
        append(`Status: ${result.status}`);
        append(`Body: ${result.text}`);
        if (result.status >= 500) serverErrors++; else non5xx++;
      } catch (error) {
        connectionErrors++;
        append('Status: CONNECTION_ERROR');
        append(`Body: ${error.message}`);
      }
    }
    append(`Summary: total=${total}, non-5xx-responses=${non5xx}, 5xx-responses=${serverErrors}, connection-errors=${connectionErrors}`);
    append('Note: 4xx responses can be expected for authentication, validation, or deliberately nonexistent smoke-test IDs.');
    append('API test run complete.');
  } finally {
    children.forEach(child => child.kill());
  }
}

main().catch(error => {
  append(`Uncaught error: ${error.stack || error}`);
  process.exitCode = 1;
});
