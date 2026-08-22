const mysql = require('mysql2/promise');

(async () => {
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sidd3221',
    database: 'edtech_platform'
  });

  // Check constraint
  const [res] = await conn.execute('SHOW CREATE TABLE student_profiles');
  const sql = res[0]['Create Table'];
  console.log('Full CREATE TABLE:');
  console.log(sql);
  
  await conn.end();
})();
