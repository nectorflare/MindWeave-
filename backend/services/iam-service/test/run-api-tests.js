const fs = require('fs');

const LOG_PATH = './logs/api-test-output.log';
function append(line) {
  fs.appendFileSync(LOG_PATH, line + '\n');
}

const BASE = 'http://localhost:3001/api/iam';

async function waitForServer(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${BASE}/health`);
      if (res.ok) return true;
    } catch (e) {
      // ignore
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  return false;
}

async function run() {
  if (!fs.existsSync('./logs')) fs.mkdirSync('./logs');
  fs.writeFileSync(LOG_PATH, `API test run - ${new Date().toISOString()}\n`);

  append('Waiting for server availability...');
  const up = await waitForServer(30000);
  append(`Server up: ${up}`);
  if (!up) {
    append('Server did not become available within timeout. Exiting.');
    console.error('Server did not become available. See logs.');
    process.exit(2);
  }

  const uniqueId = `${Date.now()}-${Math.floor(Math.random()*10000)}`;
  const headers = { 'Content-Type': 'application/json' };

  // Compose full payloads matching service required fields
  const schoolPayload = {
    schoolName: `Test Academy ${uniqueId}`,
    schoolCode: `TST-${uniqueId}`,
    schoolType: 'Private',
    boardName: 'ICSE',
    affiliationNumber: 'AFF' + Math.floor(Math.random()*90000+10000),
    udiseCode: 'UDISE' + Math.floor(Math.random()*90000+10000),
    establishedYear: '2010',
    addressLine1: '123 Main Street',
    addressLine2: 'Suite 100',
    city: 'Mumbai',
    district: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India',
    principalName: 'Principal Name',
    principalMobileNumber: '9999999999',
    principalEmailId: `principal-${uniqueId}@test.com`,
    olympiadCoordinatorName: 'Coordinator Name',
    designation: 'Coordinator',
    mobileNumber: '9999999998',
    whatsappNumber: '9999999997',
    coordinatorEmailId: `coord-${uniqueId}@test.com`,
    emailId: `school-${uniqueId}@test.com`,
    password: 'TestPass123!',
    confirmPassword: 'TestPass123!'
  };

  const userPayload = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    dateOfBirth: '2010-01-15',
    classGrade: '5',
    schoolName: schoolPayload.schoolName,
    city: schoolPayload.city,
    state: schoolPayload.state,
    fatherName: 'Father Name',
    motherName: 'Mother Name',
    parentMobileNumber: '9999999996',
    emailId: `student-${uniqueId}@test.com`,
    mobileNumber: '9999999995',
    password: 'TestPass123!',
    confirmPassword: 'TestPass123!',
    address: '123 Student Ave',
    addressCity: schoolPayload.city,
    addressState: schoolPayload.state,
    pincode: schoolPayload.pincode
  };

  // 1. Health
  try {
    append('--- REQUEST GET /health');
    const h = await fetch(`${BASE}/health`);
    append(`Status: ${h.status}`);
    append(`Body: ${await h.text()}`);
  } catch (err) {
    append('Health check error: ' + err.message);
  }

  // 2. Register school
  try {
    append('--- REQUEST POST /register-school');
    const res = await fetch(`${BASE}/register-school`, { method: 'POST', headers, body: JSON.stringify(schoolPayload) });
    const text = await res.text();
    append(`Status: ${res.status}`);
    append(`Body: ${text}`);
  } catch (err) {
    append('Register school error: ' + err.message);
  }

  // 3. Register user
  try {
    append('--- REQUEST POST /register-user');
    const res = await fetch(`${BASE}/register-user`, { method: 'POST', headers, body: JSON.stringify(userPayload) });
    const text = await res.text();
    append(`Status: ${res.status}`);
    append(`Body: ${text}`);
  } catch (err) {
    append('Register user error: ' + err.message);
  }

  // 4. Login
  try {
    append('--- REQUEST POST /login');
    const res = await fetch(`${BASE}/login`, { method: 'POST', headers, body: JSON.stringify({ email: userPayload.emailId, password: userPayload.password }) });
    const text = await res.text();
    append(`Status: ${res.status}`);
    append(`Body: ${text}`);
  } catch (err) {
    append('Login error: ' + err.message);
  }

  // 5. Get lists, then use first ids for id-based tests
  let schoolId = null;
  try {
    append('--- REQUEST GET /schools');
    const res = await fetch(`${BASE}/schools`);
    const text = await res.text();
    append(`Status: ${res.status}`);
    append(`Body: ${text}`);
    try {
      const json = JSON.parse(text);
      if (Array.isArray(json.schools) && json.schools.length) schoolId = json.schools[0].id;
    } catch (e) {}
  } catch (err) {
    append('Get schools error: ' + err.message);
  }

  let studentId = null;
  try {
    append('--- REQUEST GET /students');
    const res = await fetch(`${BASE}/students`);
    const text = await res.text();
    append(`Status: ${res.status}`);
    append(`Body: ${text}`);
    try {
      const json = JSON.parse(text);
      if (Array.isArray(json.students) && json.students.length) studentId = json.students[0].id;
    } catch (e) {}
  } catch (err) {
    append('Get students error: ' + err.message);
  }

  if (schoolId) {
    try {
      append(`--- REQUEST GET /schools/${schoolId}`);
      const res = await fetch(`${BASE}/schools/${schoolId}`);
      append(`Status: ${res.status}`);
      append(`Body: ${await res.text()}`);
    } catch (err) {
      append('Get school by id error: ' + err.message);
    }

    try {
      append(`--- REQUEST PUT /schools/${schoolId}`);
      const res = await fetch(`${BASE}/schools/${schoolId}`, { method: 'PUT', headers, body: JSON.stringify({ schoolName: 'Updated School Name' }) });
      append(`Status: ${res.status}`);
      append(`Body: ${await res.text()}`);
    } catch (err) {
      append('Update school error: ' + err.message);
    }
  }

  if (studentId) {
    try {
      append(`--- REQUEST GET /students/${studentId}`);
      const res = await fetch(`${BASE}/students/${studentId}`);
      append(`Status: ${res.status}`);
      append(`Body: ${await res.text()}`);
    } catch (err) {
      append('Get student by id error: ' + err.message);
    }

    try {
      append(`--- REQUEST PUT /students/${studentId}`);
      const res = await fetch(`${BASE}/students/${studentId}`, { method: 'PUT', headers, body: JSON.stringify({ firstName: 'UpdatedFirst' }) });
      append(`Status: ${res.status}`);
      append(`Body: ${await res.text()}`);
    } catch (err) {
      append('Update student error: ' + err.message);
    }
  }

  append('API test run complete.');
  console.log('API tests finished. Log at', LOG_PATH);
}

run().catch(err => {
  append('Uncaught error: ' + (err && err.stack ? err.stack : String(err)));
  process.exit(1);
});
