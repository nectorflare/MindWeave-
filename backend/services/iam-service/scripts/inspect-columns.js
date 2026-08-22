const mysql = require('mysql2/promise');

(async () => {
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD || 'Sidd3221',
    database: 'edtech_platform'
  });

  const [usersId] = await conn.execute(
    'SELECT COLUMN_TYPE, COLUMN_KEY, IS_NULLABLE, COLLATION_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME=? AND COLUMN_NAME=?',
    ['users', 'id']
  );
  const [schoolUserIdCol] = await conn.execute(
    'SELECT COLUMN_TYPE, COLUMN_KEY, IS_NULLABLE, COLLATION_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME=? AND COLUMN_NAME=?',
    ['school_profiles', 'user_id']
  );
  const [studentUserIdCol] = await conn.execute(
    'SELECT COLUMN_TYPE, COLUMN_KEY, IS_NULLABLE, COLLATION_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME=? AND COLUMN_NAME=?',
    ['student_profiles', 'user_id']
  );

  console.log('\nusers.id:');
  console.log(JSON.stringify(usersId, null, 2));
  console.log('\nschool_profiles.user_id:');
  console.log(JSON.stringify(schoolUserIdCol, null, 2));
  console.log('\nstudent_profiles.user_id:');
  console.log(JSON.stringify(studentUserIdCol, null, 2));

  await conn.end();
})();
