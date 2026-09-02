const path = require('node:path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const { randomUUID, scryptSync } = require('node:crypto');
const { Sequelize, QueryTypes } = require('sequelize');

const db = new Sequelize(
  process.env.MYSQL_DATABASE || 'edtech_platform',
  process.env.MYSQL_USER || 'root',
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT || 3306),
    dialect: 'mysql',
    logging: false
  }
);

const permissions = [
  'dashboard.read', 'catalog.write', 'reports.export', 'students.write',
  'schools.write', 'exams.write', 'questions.write', 'registrations.write',
  'results.write', 'commerce.write', 'finance.write', 'cms.write',
  'staff.write', 'settings.write', 'audit.read'
];

const passwordHash = (value) => {
  const salt = randomUUID();
  return `${salt}:${scryptSync(value, salt, 32).toString('hex')}`;
};

async function bootstrapProductionAdmin({ requireCredentials = false } = {}) {
  const email = String(process.env.INITIAL_ADMIN_EMAIL || '').trim().toLowerCase();
  const password = String(process.env.INITIAL_ADMIN_PASSWORD || '');
  const name = String(process.env.INITIAL_ADMIN_NAME || 'Platform Administrator').trim();
  const resetPassword = process.env.INITIAL_ADMIN_RESET_PASSWORD === 'true';

  if (!email || !password) {
    const message = 'INITIAL_ADMIN_EMAIL and INITIAL_ADMIN_PASSWORD are not set; production admin bootstrap skipped.';
    if (requireCredentials) throw new Error(message);
    console.warn(message);
    return { skipped: true };
  }

  if (password.length < 14) {
    throw new Error('INITIAL_ADMIN_PASSWORD must contain at least 14 characters.');
  }

  await db.authenticate();

  const result = await db.transaction(async (transaction) => {
    const options = { transaction, type: QueryTypes.SELECT };
    const roles = await db.query(
      'SELECT id FROM admin_roles WHERE name=:name LIMIT 1',
      { replacements: { name: 'PRODUCTION_ADMIN' }, ...options }
    );
    const roleId = roles[0]?.id || randomUUID();

    if (!roles.length) {
      await db.query(
        'INSERT INTO admin_roles(id,name,description) VALUES(:id,:name,:description)',
        { replacements: { id: roleId, name: 'PRODUCTION_ADMIN', description: 'Full production administrator access' }, transaction }
      );
    }

    for (const permission of permissions) {
      await db.query(
        'INSERT IGNORE INTO role_permissions(role_id,permission_key) VALUES(:roleId,:permission)',
        { replacements: { roleId, permission }, transaction }
      );
    }

    const admins = await db.query(
      'SELECT id FROM admin_staff WHERE email=:email LIMIT 1',
      { replacements: { email }, ...options }
    );
    const adminId = admins[0]?.id || randomUUID();

    if (!admins.length) {
      await db.query(
        `INSERT INTO admin_staff(id,email,name,password_hash,status)
         VALUES(:id,:email,:name,:passwordHash,'ACTIVE')`,
        { replacements: { id: adminId, email, name, passwordHash: passwordHash(password) }, transaction }
      );
    } else if (resetPassword) {
      await db.query(
        `UPDATE admin_staff
         SET name=:name,password_hash=:passwordHash,status='ACTIVE'
         WHERE id=:id`,
        { replacements: { id: adminId, name, passwordHash: passwordHash(password) }, transaction }
      );
    } else {
      await db.query(
        "UPDATE admin_staff SET name=:name,status='ACTIVE' WHERE id=:id",
        { replacements: { id: adminId, name }, transaction }
      );
    }

    await db.query(
      'INSERT IGNORE INTO admin_staff_roles(staff_id,role_id) VALUES(:adminId,:roleId)',
      { replacements: { adminId, roleId }, transaction }
    );

    return {
      adminId,
      email,
      created: !admins.length,
      passwordReset: !admins.length || resetPassword
    };
  });

  return result;
}

module.exports = { bootstrapProductionAdmin };

if (require.main === module) {
  bootstrapProductionAdmin({ requireCredentials: true })
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => {
      console.error('Production admin bootstrap failed:', error.message || error);
      process.exitCode = 1;
    })
    .finally(() => db.close());
}
