require('dotenv').config();
const { randomUUID, scryptSync } = require('node:crypto');
const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');

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

const ids = {
  schoolUser: '10000000-0000-4000-8000-000000000001',
  studentUser: '10000000-0000-4000-8000-000000000002',
  school: '10000000-0000-4000-8000-000000000101',
  student: '10000000-0000-4000-8000-000000000102',
  subject: '10000000-0000-4000-8000-000000000201',
  exam: '10000000-0000-4000-8000-000000000301',
  question1: '10000000-0000-4000-8000-000000000401',
  question2: '10000000-0000-4000-8000-000000000402',
  payment: '10000000-0000-4000-8000-000000000501',
  registration: '10000000-0000-4000-8000-000000000601',
  session: '10000000-0000-4000-8000-000000000701',
  answer: '10000000-0000-4000-8000-000000000801',
  banner: '10000000-0000-4000-8000-000000000901',
  offer: '10000000-0000-4000-8000-000000000902',
  faq: '10000000-0000-4000-8000-000000000903',
  inquiry: '10000000-0000-4000-8000-000000000904',
  book: '10000000-0000-4000-8000-000000000a01',
  bookOrder: '10000000-0000-4000-8000-000000000a02',
  orderItem: '10000000-0000-4000-8000-000000000a03',
  cartItem: '10000000-0000-4000-8000-000000000a04',
  review: '10000000-0000-4000-8000-000000000a05',
  refund: '10000000-0000-4000-8000-000000000a06',
  notification: '10000000-0000-4000-8000-000000000b01',
  notificationJob: '10000000-0000-4000-8000-000000000b02',
  file: '10000000-0000-4000-8000-000000000b03',
  report: '10000000-0000-4000-8000-000000000b04',
  role: '10000000-0000-4000-8000-000000000c01',
  admin: '10000000-0000-4000-8000-000000000c02'
};

const q = (sql, replacements = {}) => db.query(sql, { replacements });

async function seed() {
  await db.authenticate();
  const passwordHash = await bcrypt.hash('TestPass123!', 10);
  const adminSalt = randomUUID();
  const adminHash = `${adminSalt}:${scryptSync('AdminTest123!', adminSalt, 32).toString('hex')}`;
  const schoolColumns = await db.getQueryInterface().describeTable('school_profiles');

  await db.transaction(async transaction => {
    const run = (sql, replacements = {}) => db.query(sql, { replacements, transaction });

    await run(`INSERT INTO users(id,email,password_hash,role,status,is_email_verified,created_at,updated_at)
      VALUES(:id,'seed-school@mindweave.test',:hash,'SCHOOL_ADMIN','ACTIVE',1,NOW(),NOW())
      ON DUPLICATE KEY UPDATE password_hash=VALUES(password_hash),status='ACTIVE'`, { id: ids.schoolUser, hash: passwordHash });
    await run(`INSERT INTO users(id,email,password_hash,role,status,is_email_verified,created_at,updated_at)
      VALUES(:id,'seed-student@mindweave.test',:hash,'STUDENT','ACTIVE',1,NOW(),NOW())
      ON DUPLICATE KEY UPDATE password_hash=VALUES(password_hash),status='ACTIVE'`, { id: ids.studentUser, hash: passwordHash });

    const extendedSchoolFields = schoolColumns.school_type ? `,
      school_type,established_year,address_line1,address_line2,city,district,state,pincode,country,
      principal_name,principal_mobile_number,principal_email_id,olympiad_coordinator_name,
      designation,mobile_number,whatsapp_number,coordinator_email_id` : '';
    const extendedSchoolValues = schoolColumns.school_type ? `,
      'Private','2012','1 Test Campus','Seed Wing','Bengaluru','Bengaluru Urban','Karnataka','560001','India',
      'Seed Principal','9000000001','principal@mindweave.test','Seed Coordinator',
      'Coordinator','9000000002','9000000002','coordinator@mindweave.test'` : '';
    await run(`INSERT INTO school_profiles(
      id,user_id,school_name,school_code,board_name,affiliation_number,udise_code,
      address_data,principal_data,coordinator_data,is_verified${extendedSchoolFields})
      VALUES(:id,:uid,'MindWeave Seed Academy','MW-SEED-001','CBSE','MW-AFF-001',
      'MW-UDISE-001',
      JSON_OBJECT('line1','1 Test Campus','line2','Seed Wing','city','Bengaluru','district','Bengaluru Urban','state','Karnataka','pincode','560001','country','India'),
      JSON_OBJECT('name','Seed Principal','mobileNumber','9000000001','email','principal@mindweave.test'),
      JSON_OBJECT('name','Seed Coordinator','designation','Coordinator','mobileNumber','9000000002','whatsappNumber','9000000002','email','coordinator@mindweave.test'),1${extendedSchoolValues})
      ON DUPLICATE KEY UPDATE school_name=VALUES(school_name),is_verified=1`, { id: ids.school, uid: ids.schoolUser });

    await run(`INSERT INTO student_profiles(
      id,user_id,school_id,first_name,last_name,date_of_birth,class_grade,parent_data,address_data)
      VALUES(:id,:uid,:school,'Seed','Student','2012-01-15','7',
      JSON_OBJECT('fatherName','Seed Father','motherName','Seed Mother','mobileNumber','9000000003','email','seed-student@mindweave.test'),
      JSON_OBJECT('line1','2 Test Street','city','Bengaluru','state','Karnataka','pincode','560001','mobileNumber','9000000004'))
      ON DUPLICATE KEY UPDATE school_id=VALUES(school_id),class_grade=VALUES(class_grade)`,
      { id: ids.student, uid: ids.studentUser, school: ids.school });

    await run(`INSERT INTO subjects(id,name,code,description,syllabus_url,status)
      VALUES(:id,'Seed Mathematics','MW-MATH-SEED','Dummy subject for system testing',
      'https://example.test/syllabus/seed-math.pdf','PUBLISHED')
      ON DUPLICATE KEY UPDATE status='PUBLISHED',description=VALUES(description)`, { id: ids.subject });
    await run(`INSERT INTO exams(id,subject_id,created_by,title,description,mode,start_time,
      registration_start_at,registration_end_at,duration_mins,total_marks,fee,currency,capacity,
      eligibility_criteria,status)
      VALUES(:id,:subject,:admin,'Seed Mathematics Olympiad','Dummy online exam','ONLINE',
      DATE_ADD(NOW(),INTERVAL 30 DAY),DATE_SUB(NOW(),INTERVAL 1 DAY),DATE_ADD(NOW(),INTERVAL 20 DAY),
      60,100,250,'INR',500,JSON_OBJECT('classes',JSON_ARRAY('6','7','8')),'PUBLISHED')
      ON DUPLICATE KEY UPDATE status='PUBLISHED',start_time=VALUES(start_time)`,
      { id: ids.exam, subject: ids.subject, admin: ids.schoolUser });
    await run(`INSERT INTO questions(id,exam_id,created_by,question_text,options,correct_option,marks,display_order,status)
      VALUES(:id,:exam,:admin,'What is 12 × 8?',JSON_ARRAY('86','96','106','116'),'B',5,1,'PUBLISHED')
      ON DUPLICATE KEY UPDATE status='PUBLISHED'`, { id: ids.question1, exam: ids.exam, admin: ids.schoolUser });
    await run(`INSERT INTO questions(id,exam_id,created_by,question_text,options,correct_option,marks,display_order,status)
      VALUES(:id,:exam,:admin,'What is the square root of 144?',JSON_ARRAY('10','11','12','14'),'C',5,2,'PUBLISHED')
      ON DUPLICATE KEY UPDATE status='PUBLISHED'`, { id: ids.question2, exam: ids.exam, admin: ids.schoolUser });

    await run(`INSERT INTO payment_orders(id,user_id,gateway_order_id,gateway_payment_id,amount,currency,
      status,payment_method,invoice_url,purpose,reference_id)
      VALUES(:id,:uid,'seed_gateway_order','seed_gateway_payment',250,'INR','SUCCESS','TEST',
      'https://example.test/invoices/seed.pdf','EXAM_REGISTRATION',:exam)
      ON DUPLICATE KEY UPDATE status='SUCCESS'`, { id: ids.payment, uid: ids.studentUser, exam: ids.exam });
    await run(`INSERT INTO exam_registrations(id,student_id,exam_id,payment_order_id,registered_by_type,
      registered_by_id,status,admit_card_url,admit_card_status,result_score,result_status,result_metadata,certificate_url)
      VALUES(:id,:student,:exam,:payment,'STUDENT',:student,'APPROVED',
      'https://example.test/admit-cards/seed.pdf','PUBLISHED',90,'PUBLISHED',
      JSON_OBJECT('rank',1,'percentage',90),'https://example.test/certificates/seed.pdf')
      ON DUPLICATE KEY UPDATE status='APPROVED',result_status='PUBLISHED'`,
      { id: ids.registration, student: ids.student, exam: ids.exam, payment: ids.payment });
    await run(`INSERT INTO exam_sessions(id,registration_id,session_token,status,time_remaining,is_flagged,
      started_at,last_heartbeat_at)
      VALUES(:id,:registration,'seed-session-token','SUBMITTED',0,0,DATE_SUB(NOW(),INTERVAL 1 HOUR),NOW())
      ON DUPLICATE KEY UPDATE status='SUBMITTED'`, { id: ids.session, registration: ids.registration });
    await run(`INSERT INTO session_answers(id,session_id,question_id,selected_option)
      VALUES(:id,:session,:question,'B') ON DUPLICATE KEY UPDATE selected_option='B'`,
      { id: ids.answer, session: ids.session, question: ids.question1 });

    await run(`INSERT INTO banners(id,title,image_url,is_active,display_order)
      VALUES(:id,'Seed Welcome Banner','https://example.test/images/banner.jpg',1,1)
      ON DUPLICATE KEY UPDATE is_active=1`, { id: ids.banner });
    await run(`INSERT INTO offers(id,title,description,code,starts_at,ends_at,is_active,display_order)
      VALUES(:id,'Seed Early Bird','Dummy discount','MWSEED10',NOW(),DATE_ADD(NOW(),INTERVAL 30 DAY),1,1)
      ON DUPLICATE KEY UPDATE is_active=1`, { id: ids.offer });
    await run(`INSERT INTO faqs(id,question,answer,is_active,display_order)
      VALUES(:id,'Is this seed data?','Yes. It is safe test fixture data.',1,1)
      ON DUPLICATE KEY UPDATE is_active=1`, { id: ids.faq });
    await run(`INSERT INTO inquiries(id,name,email,message,status)
      VALUES(:id,'Seed Parent','seed-parent@mindweave.test','Seed inquiry','NEW')
      ON DUPLICATE KEY UPDATE status='NEW'`, { id: ids.inquiry });

    await run(`INSERT INTO books(id,title,author,subject_id,description,price,stock_quantity,is_digital,pdf_url,cover_url,status)
      VALUES(:id,'Seed Mathematics Workbook','MindWeave',:subject,'Dummy commerce fixture',199,100,1,
      'https://example.test/books/seed.pdf','https://example.test/images/book.jpg','ACTIVE')
      ON DUPLICATE KEY UPDATE stock_quantity=100,status='ACTIVE'`, { id: ids.book, subject: ids.subject });
    await run(`INSERT INTO book_orders(id,student_id,payment_order_id,tracking_id,shipping_status)
      VALUES(:id,:student,:payment,'MW-SEED-TRACK','DELIVERED')
      ON DUPLICATE KEY UPDATE shipping_status='DELIVERED'`,
      { id: ids.bookOrder, student: ids.student, payment: ids.payment });
    await run(`INSERT INTO order_items(id,book_order_id,book_id,quantity,price_at_purchase)
      VALUES(:id,:bookOrder,:book,1,199) ON DUPLICATE KEY UPDATE quantity=1`,
      { id: ids.orderItem, bookOrder: ids.bookOrder, book: ids.book });
    await run(`INSERT INTO cart_items(id,user_id,book_id,quantity)
      VALUES(:id,:uid,:book,1) ON DUPLICATE KEY UPDATE quantity=1`,
      { id: ids.cartItem, uid: ids.studentUser, book: ids.book });
    await run(`INSERT INTO book_reviews(id,book_id,user_id,rating,comment)
      VALUES(:id,:book,:uid,5,'Seed review') ON DUPLICATE KEY UPDATE rating=5`,
      { id: ids.review, book: ids.book, uid: ids.studentUser });
    await run(`INSERT INTO refunds(id,payment_order_id,amount,reason,status)
      VALUES(:id,:payment,10,'Seed partial refund','SUCCESS') ON DUPLICATE KEY UPDATE status='SUCCESS'`,
      { id: ids.refund, payment: ids.payment });

    await run(`INSERT INTO notifications(id,user_id,type,subject,body,status)
      VALUES(:id,:uid,'EXAM_REMINDER','Seed exam reminder','Your seed exam is scheduled.','DELIVERED')
      ON DUPLICATE KEY UPDATE status='DELIVERED'`, { id: ids.notification, uid: ids.studentUser });
    await run(`INSERT INTO notification_jobs(id,user_id,channel,template_key,payload,status,attempts,processed_at)
      VALUES(:id,:uid,'EMAIL','SEED_TEMPLATE',JSON_OBJECT('seed',true),'SENT',1,NOW())
      ON DUPLICATE KEY UPDATE status='SENT'`, { id: ids.notificationJob, uid: ids.studentUser });
    await run(`INSERT INTO files(id,owner_id,storage_key,file_name,content_type,size_bytes,status)
      VALUES(:id,:uid,'seed/system-test.pdf','system-test.pdf','application/pdf',1024,'READY')
      ON DUPLICATE KEY UPDATE status='READY'`, { id: ids.file, uid: ids.studentUser });
    await run(`INSERT INTO report_jobs(id,type,filters,status,output_url)
      VALUES(:id,'STUDENT_PERFORMANCE',JSON_OBJECT('seed',true),'COMPLETED',
      'https://example.test/reports/seed.csv') ON DUPLICATE KEY UPDATE status='COMPLETED'`, { id: ids.report });

    await run(`INSERT INTO admin_roles(id,name,description) VALUES(:id,'SEED_TEST_ADMIN','Seed testing role')
      ON DUPLICATE KEY UPDATE description=VALUES(description)`, { id: ids.role });
    await run(`INSERT INTO role_permissions(role_id,permission_key) VALUES
      (:id,'dashboard.read'),(:id,'catalog.write'),(:id,'reports.export'),(:id,'students.write'),
      (:id,'schools.write'),(:id,'exams.write'),(:id,'questions.write'),(:id,'registrations.write'),
      (:id,'results.write'),(:id,'commerce.write'),(:id,'finance.write'),(:id,'cms.write'),
      (:id,'staff.write'),(:id,'settings.write'),(:id,'audit.read')
      ON DUPLICATE KEY UPDATE permission_key=VALUES(permission_key)`, { id: ids.role });
    await run(`INSERT INTO admin_staff(id,email,name,password_hash,status)
      VALUES(:id,'seed-admin@mindweave.test','Seed Admin',:hash,'ACTIVE')
      ON DUPLICATE KEY UPDATE password_hash=VALUES(password_hash),status='ACTIVE'`,
      { id: ids.admin, hash: adminHash });
    await run(`INSERT INTO admin_staff_roles(staff_id,role_id) VALUES(:admin,:role)
      ON DUPLICATE KEY UPDATE role_id=VALUES(role_id)`, { admin: ids.admin, role: ids.role });
    await run(`INSERT INTO system_settings(setting_key,setting_value)
      VALUES('seed_test_mode',JSON_OBJECT('enabled',true,'label','MindWeave test fixtures'))
      ON DUPLICATE KEY UPDATE setting_value=VALUES(setting_value)`);
  });

  const tables = [
    'users', 'school_profiles', 'student_profiles', 'subjects', 'exams', 'questions',
    'payment_orders', 'exam_registrations', 'exam_sessions', 'books', 'book_orders',
    'notifications', 'files', 'report_jobs', 'admin_staff'
  ];
  const counts = {};
  for (const table of tables) {
    const [rows] = await q(`SELECT COUNT(*) count FROM ${table}`);
    counts[table] = Number(rows[0].count);
  }
  console.log(JSON.stringify({ seeded: true, credentials: {
    student: 'seed-student@mindweave.test / TestPass123!',
    school: 'seed-school@mindweave.test / TestPass123!',
    admin: 'seed-admin@mindweave.test / AdminTest123!'
  }, counts }, null, 2));
  await db.close();
}

seed().catch(async error => {
  console.error(error);
  await db.close().catch(() => {});
  process.exit(1);
});
