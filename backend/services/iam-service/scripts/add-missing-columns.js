const mysql = require('mysql2/promise');

async function main() {
  const host = process.env.MYSQL_HOST || 'localhost';
  const port = Number(process.env.MYSQL_PORT || 3306);
  const user = process.env.MYSQL_USER || 'root';
  const password = process.env.MYSQL_PASSWORD || '';
  const database = process.env.MYSQL_DATABASE || 'edtech_platform';

  const conn = await mysql.createConnection({ host, port, user, password, database });
  console.log('Connected to MySQL', host, database);

  const checks = [
    { table: 'student_profiles', column: 'gender', ddl: "gender VARCHAR(50) NULL" },
    { table: 'student_profiles', column: 'father_name', ddl: "father_name VARCHAR(255) NULL" },
    { table: 'student_profiles', column: 'mother_name', ddl: "mother_name VARCHAR(255) NULL" },
    { table: 'student_profiles', column: 'parent_mobile_number', ddl: "parent_mobile_number VARCHAR(50) NULL" },
    { table: 'student_profiles', column: 'email_id', ddl: "email_id VARCHAR(255) NULL" },
    { table: 'student_profiles', column: 'mobile_number', ddl: "mobile_number VARCHAR(50) NULL" },
    { table: 'student_profiles', column: 'address', ddl: "address VARCHAR(255) NULL" },
    { table: 'student_profiles', column: 'address_city', ddl: "address_city VARCHAR(255) NULL" },
    { table: 'student_profiles', column: 'address_state', ddl: "address_state VARCHAR(255) NULL" },
    { table: 'student_profiles', column: 'pincode', ddl: "pincode VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'school_type', ddl: "school_type VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'udise_code', ddl: "udise_code VARCHAR(50) NULL" },
    { table: 'school_profiles', column: 'affiliation_number', ddl: "affiliation_number VARCHAR(100) NULL" },
    { table: 'school_profiles', column: 'established_year', ddl: "established_year VARCHAR(10) NULL" },
    { table: 'school_profiles', column: 'address_line1', ddl: "address_line1 VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'address_line2', ddl: "address_line2 VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'district', ddl: "district VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'country', ddl: "country VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'principal_name', ddl: "principal_name VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'principal_mobile_number', ddl: "principal_mobile_number VARCHAR(50) NULL" },
    { table: 'school_profiles', column: 'principal_email_id', ddl: "principal_email_id VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'olympiad_coordinator_name', ddl: "olympiad_coordinator_name VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'designation', ddl: "designation VARCHAR(255) NULL" },
    { table: 'school_profiles', column: 'mobile_number', ddl: "mobile_number VARCHAR(50) NULL" },
    { table: 'school_profiles', column: 'whatsapp_number', ddl: "whatsapp_number VARCHAR(50) NULL" },
    { table: 'school_profiles', column: 'coordinator_email_id', ddl: "coordinator_email_id VARCHAR(255) NULL" }
  ];

  for (const c of checks) {
    try {
      const [rows] = await conn.query(
        `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
        [database, c.table, c.column]
      );
      if (Array.isArray(rows) && rows.length === 0) {
        const sql = `ALTER TABLE ${c.table} ADD COLUMN ${c.ddl}`;
        console.log('Adding column:', c.table, c.column);
        await conn.query(sql);
      } else {
        console.log('Column exists:', c.table, c.column);
      }
    } catch (err) {
      console.error('Error checking/adding', c.table, c.column, err.message || err);
    }
  }

  await conn.end();
  console.log('Migration finished');
}

main().catch(err => {
  console.error('Migration failed:', err && err.stack ? err.stack : err);
  process.exit(1);
});
