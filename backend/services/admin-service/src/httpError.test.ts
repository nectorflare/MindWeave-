import assert from 'node:assert/strict';
import test from 'node:test';
import { httpErrorResponse } from './httpError';

test('preserves intentional client error status and message', () => {
  const error = Object.assign(new Error('Invalid spreadsheet row 2'), { status: 400, code: 'VALIDATION_ERROR' });
  assert.deepEqual(httpErrorResponse(error), {
    status: 400,
    body: { success: false, error: { code: 'VALIDATION_ERROR', message: 'Invalid spreadsheet row 2' } },
  });
});

test('does not expose unexpected internal errors', () => {
  assert.deepEqual(httpErrorResponse(new Error('database password leaked')), {
    status: 500,
    body: { success: false, error: { code: 'ADMIN_ERROR', message: 'Internal server error' } },
  });
});
