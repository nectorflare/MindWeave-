import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 5 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500'],
  },
};

const BASE_URL = 'http://localhost:3001/api/iam';

export default function () {
  const uniqueId = `${Date.now()}-${__VU}-${__ITER}`;
  const testPassword = 'SecurePassword123!';
  const headers = { 'Content-Type': 'application/json' };

  // --- TEST 1: Health Check ---
  const healthRes = http.get(`${BASE_URL}/health`);
  check(healthRes, { 'health status is 200': (r) => r.status === 200 });

  // --- TEST 2: Register a School ---
  // Matches exact keys from `requiredFields` array
  const schoolPayload = JSON.stringify({
    schoolName: `Test Academy ${uniqueId}`,
    schoolType: 'Private',
    boardName: 'CBSE',
    affiliationNumber: `AFF-${uniqueId}`,
    udiseCode: `UDISE-${uniqueId}`,
    establishedYear: '2005',
    addressLine1: '123 Education Lane',
    city: 'Kanpur',
    district: 'Kanpur Nagar',
    state: 'Uttar Pradesh',
    pincode: '208001',
    country: 'India',
    principalName: 'Dr. John Smith',
    principalMobileNumber: '9876543210',
    principalEmailId: `principal-${uniqueId}@test.com`,
    olympiadCoordinatorName: 'Jane Doe',
    designation: 'Senior Teacher',
    mobileNumber: '9876543211',
    whatsappNumber: '9876543211',
    coordinatorEmailId: `coord-${uniqueId}@test.com`,
    
    emailId: `school-${uniqueId}@test.com`, // CRITICAL FIX: emailId instead of email
    password: testPassword,
    confirmPassword: testPassword
  });

  const schoolRes = http.post(`${BASE_URL}/register-school`, schoolPayload, { headers });
  if (schoolRes.status !== 201) console.log(`[School Error] Status: ${schoolRes.status}, Body: ${schoolRes.body}`);
  check(schoolRes, { 'school registered (201)': (r) => r.status === 201 });

  // --- TEST 3: Register a Regular User / Student ---
  // Matches exact keys from `userRequiredFields` array
  const userPayload = JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    dateOfBirth: '2010-05-15',
    classGrade: '10th',
    schoolName: `Test Academy ${uniqueId}`,
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    fatherName: 'Mr. Richard Doe',
    motherName: 'Mrs. Jane Doe',
    emailId: `student-${uniqueId}@test.com`, // CRITICAL FIX: emailId instead of email
    mobileNumber: '9876543212',
    address: '456 Student Housing',
    addressCity: 'Kanpur',
    addressState: 'Uttar Pradesh',
    pincode: '208002',
    
    password: testPassword,
    confirmPassword: testPassword
  });

  const userRes = http.post(`${BASE_URL}/register-user`, userPayload, { headers });
  if (userRes.status !== 201) console.log(`[User Error] Status: ${userRes.status}, Body: ${userRes.body}`);
  const userCreated = check(userRes, { 'user registered (201)': (r) => r.status === 201 });

  // --- TEST 4: Login ---
  // Note: Your login controller might still expect "email" instead of "emailId", 
  // so I will use "email" here. If login fails, try changing it to "emailId".
  if (userCreated) {
    const loginPayload = JSON.stringify({
      email: `student-${uniqueId}@test.com`, 
      password: testPassword,
    });

    const loginRes = http.post(`${BASE_URL}/login`, loginPayload, { headers });
    if (loginRes.status !== 200) console.log(`[Login Error] Status: ${loginRes.status}, Body: ${loginRes.body}`);
    check(loginRes, {
      'login successful (200)': (r) => r.status === 200,
      'login returns token': (r) => {
        try { return JSON.parse(r.body).token !== undefined; } catch(e) { return false; }
      },
    });
  }

  sleep(1);
}