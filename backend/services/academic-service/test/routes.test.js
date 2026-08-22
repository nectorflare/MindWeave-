const test = require('node:test');
const assert = require('node:assert/strict');
const publicRoutes = require('../dist/routes').default;
const internalRoutes = require('../dist/routes/internal').default;

const routeKeys = (router) => router.stack
  .filter(layer => layer.route)
  .map(layer => {
    const methods = Object.keys(layer.route.methods).map(method => method.toUpperCase());
    return methods.map(method => `${method} ${layer.route.path}`);
  })
  .flat();

test('public academic API contract is registered', () => {
  const routes = routeKeys(publicRoutes);
  [
    'GET /v1/subjects',
    'GET /v1/subjects/:id',
    'GET /v1/subjects/:id/syllabus',
    'GET /v1/exams/schedules',
    'GET /v1/exams/:id',
    'GET /v1/exams/:id/eligibility'
  ].forEach(route => assert.ok(routes.includes(route), `missing ${route}`));
});

test('internal academic API contract is registered', () => {
  const routes = routeKeys(internalRoutes);
  [
    'POST /subjects',
    'PUT /subjects/:id/syllabus',
    'POST /exams',
    'PATCH /exams/:id/status',
    'POST /questions/import',
    'GET /exams/:examId/questions',
    'GET /exams/:examId/answer-key',
    'POST /registrations',
    'POST /registrations/bulk',
    'PATCH /registrations/:id/status',
    'POST /registrations/payment-status',
    'PUT /admit-cards/:registrationId',
    'POST /admit-cards/publish',
    'PUT /results/:registrationId',
    'POST /results/publish',
    'GET /certificates'
  ].forEach(route => assert.ok(routes.includes(route), `missing ${route}`));
});
