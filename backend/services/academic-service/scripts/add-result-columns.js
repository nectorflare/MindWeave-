const mysql = require('mysql2/promise');

async function addColumnIfMissing(connection, database, table, column, definition) {
  const [rows] = await connection.query(
    `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [database, table, column]
  );

  if (rows.length === 0) {
    await connection.query(`ALTER TABLE \`${table}\` ADD COLUMN \`${column}\` ${definition}`);
    console.log(`Added ${table}.${column}`);
    return;
  }

  console.log(`Already exists: ${table}.${column}`);
}

async function main() {
  const database = process.env.MYSQL_DATABASE || 'edtech_platform';
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database
  });

  try {
    await addColumnIfMissing(
      connection,
      database,
      'exams',
      'mode',
      "ENUM('ONLINE','OFFLINE') NULL AFTER `title`"
    );
    await addColumnIfMissing(
      connection,
      database,
      'exam_registrations',
      'certificate_url',
      'VARCHAR(500) NULL AFTER `result_score`'
    );
  } finally {
    await connection.end();
  }
}

main().catch(error => {
  console.error('Result-column migration failed:', error.message || error);
  process.exit(1);
});
