import http from 'k6/http';
import { check, sleep } from 'k6';

// 1. Configure the load test phases
export const options = {
  stages: [
    { duration: '10s', target: 5 },  // Ramp up to 5 concurrent users over 10 seconds
    { duration: '20s', target: 5 },  // Stay at 5 users for 20 seconds (Stress the DB)
    { duration: '5s', target: 0 },   // Ramp down to 0 users
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],   // Error rate should be less than 1%
    http_req_duration: ['p(95)<500'], // 95% of requests should complete under 500ms
  },
};

const BASE_URL = 'http://localhost:3001/api/iam';

export default function () {
  // Generate unique identifiers so we don't hit duplicate email errors in the DB
  const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  const testPassword = 'SecurePassword123!';
  
  const headers = { 'Content-Type': 'application/json' };

  // --- TEST 1: Health Check ---
  const healthRes = http.get(`${BASE_URL}/health`);
  check(healthRes, {
    'health status is 200': (r) => r.status === 200,
  });

  // --- TEST 2: Register a School ---
  // Adjust these payload fields based on what your Sequelize 'SchoolProfile' model actually requires
  const schoolPayload = JSON.stringify({
    email: `school-${uniqueId}@test.com`,
    password: testPassword,
    confirmPassword: testPassword,
    schoolName: `Test Academy ${uniqueId}`,
  });

  const schoolRes = http.post(`${BASE_URL}/register-school`, schoolPayload, { headers });
  check(schoolRes, {
    'school registered (201 or 400 validation)': (r) => r.status === 201 || r.status === 400,
  });

  // --- TEST 3: Register a Regular User / Student ---
  // Adjust these payload fields based on what your 'StudentProfile' model requires
  const userPayload = JSON.stringify({
    email: `student-${uniqueId}@test.com`,
    password: testPassword,
    confirmPassword: testPassword,
    firstName: 'John',
    lastName: 'Doe',
  });

  const userRes = http.post(`${BASE_URL}/register-user`, userPayload, { headers });
  const userCreated = check(userRes, {
    'user registered (201)': (r) => r.status === 201,
  });

  // --- TEST 4: Login (Only if user registration was successful) ---
  if (userCreated) {
    const loginPayload = JSON.stringify({
      email: `student-${uniqueId}@test.com`,
      password: testPassword,
    });

    const loginRes = http.post(`${BASE_URL}/login`, loginPayload, { headers });
    check(loginRes, {
      'login successful (200)': (r) => r.status === 200,
      'login returns token': (r) => JSON.parse(r.body).token !== undefined,
    });
  }

  // Pacing: Wait 1 second between iterations per virtual user to simulate human behavior
  sleep(1);
}