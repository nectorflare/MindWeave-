CREATE DATABASE IF NOT EXISTS edtech_platform;
USE edtech_platform;

CREATE TABLE users (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('STUDENT','SCHOOL_ADMIN','SYS_ADMIN') NOT NULL,
  status ENUM('ACTIVE','INACTIVE','SUSPENDED') DEFAULT 'ACTIVE',
  is_email_verified TINYINT(1) DEFAULT 0,
  failed_login_attempts INT DEFAULT 0,
  last_login_at TIMESTAMP NULL,
  password_reset_token VARCHAR(255) NULL,
  reset_token_expires_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL,
  INDEX idx_users_role (role)
);

CREATE TABLE school_profiles (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id CHAR(36) NOT NULL,
  school_name VARCHAR(255) NOT NULL,
  school_code VARCHAR(50) UNIQUE,
  board_name VARCHAR(100),
  affiliation_number VARCHAR(100),
  udise_code VARCHAR(50) UNIQUE,
  address_data JSON,
  principal_data JSON,
  coordinator_data JSON,
  school_type VARCHAR(255),
  established_year VARCHAR(10),
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(255),
  district VARCHAR(255),
  state VARCHAR(255),
  pincode VARCHAR(255),
  country VARCHAR(255),
  principal_name VARCHAR(255),
  principal_mobile_number VARCHAR(50),
  principal_email_id VARCHAR(255),
  olympiad_coordinator_name VARCHAR(255),
  designation VARCHAR(255),
  mobile_number VARCHAR(50),
  whatsapp_number VARCHAR(50),
  coordinator_email_id VARCHAR(255),
  is_verified TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_school_profiles_user_id (user_id)
);

CREATE TABLE student_profiles (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id CHAR(36) NOT NULL,
  school_id CHAR(36),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE,
  class_grade VARCHAR(20),
  parent_data JSON,
  address_data JSON,
  gender VARCHAR(50),
  father_name VARCHAR(255),
  mother_name VARCHAR(255),
  parent_mobile_number VARCHAR(50),
  email_id VARCHAR(255),
  mobile_number VARCHAR(50),
  address VARCHAR(255),
  address_city VARCHAR(255),
  address_state VARCHAR(255),
  pincode VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_student_profiles_user_id (user_id),
  INDEX idx_student_profiles_school_id (school_id)
);

CREATE TABLE subjects (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50) UNIQUE,
  description TEXT,
  syllabus_url VARCHAR(500),
  status ENUM('DRAFT','PUBLISHED','ARCHIVED') NOT NULL DEFAULT 'DRAFT',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_subjects_status (status)
);

CREATE TABLE exams (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  subject_id CHAR(36) NOT NULL,
  created_by CHAR(36),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  mode ENUM('ONLINE','OFFLINE') NOT NULL,
  start_time TIMESTAMP NOT NULL,
  registration_start_at TIMESTAMP NULL,
  registration_end_at TIMESTAMP NULL,
  duration_mins INT NOT NULL,
  total_marks INT NOT NULL,
  fee DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  currency VARCHAR(10) NOT NULL DEFAULT 'INR',
  capacity INT NULL,
  eligibility_criteria JSON,
  status ENUM('DRAFT','PUBLISHED','CLOSED','CANCELLED','COMPLETED') NOT NULL DEFAULT 'DRAFT',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_exams_subject_id (subject_id),
  INDEX idx_exams_created_by (created_by),
  INDEX idx_exams_start_time (start_time),
  INDEX idx_exams_status (status)
);

CREATE TABLE questions (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  exam_id CHAR(36) NOT NULL,
  created_by CHAR(36),
  question_text TEXT NOT NULL,
  options JSON NOT NULL,
  correct_option VARCHAR(10) NOT NULL,
  marks INT NOT NULL DEFAULT 1,
  display_order INT NOT NULL DEFAULT 0,
  status ENUM('DRAFT','PUBLISHED','ARCHIVED') NOT NULL DEFAULT 'DRAFT',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_questions_exam_id (exam_id),
  INDEX idx_questions_created_by (created_by),
  INDEX idx_questions_status (status)
);

CREATE TABLE payment_orders (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id CHAR(36) NOT NULL,
  gateway_order_id VARCHAR(255) UNIQUE,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  tax_amount DECIMAL(10,2) DEFAULT 0.00,
  discount_amount DECIMAL(10,2) DEFAULT 0.00,
  status ENUM('PENDING','SUCCESS','FAILED') DEFAULT 'PENDING',
  payment_method VARCHAR(50),
  invoice_url VARCHAR(500),
  version_id INT DEFAULT 1,
  gateway_payment_id VARCHAR(255),
  purpose VARCHAR(50),
  reference_id CHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_payment_orders_user_id (user_id)
);

CREATE TABLE books (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT DEFAULT 0,
  is_digital TINYINT(1) DEFAULT 0,
  pdf_url VARCHAR(500),
  author VARCHAR(255),
  subject_id CHAR(36),
  description TEXT,
  cover_url VARCHAR(500),
  status ENUM('ACTIVE','INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_orders (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  student_id CHAR(36) NOT NULL,
  payment_order_id CHAR(36) NOT NULL,
  tracking_id VARCHAR(255),
  shipping_status ENUM('PENDING','SHIPPED','DELIVERED','CANCELLED') DEFAULT 'PENDING',
  buyer_type ENUM('STUDENT','SCHOOL') NOT NULL DEFAULT 'STUDENT',
  shipping_address JSON,
  subtotal DECIMAL(10,2) NOT NULL DEFAULT 0,
  shipping_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  tax_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  cancellation_reason TEXT,
  return_status ENUM('NONE','REQUESTED','APPROVED','REJECTED','COMPLETED') NOT NULL DEFAULT 'NONE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_book_orders_student_id (student_id),
  INDEX idx_book_orders_payment_order_id (payment_order_id)
);

CREATE TABLE order_items (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  book_order_id CHAR(36) NOT NULL,
  book_id CHAR(36) NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price_at_purchase DECIMAL(10,2) NOT NULL,
  INDEX idx_order_items_book_order_id (book_order_id),
  INDEX idx_order_items_book_id (book_id)
);

CREATE TABLE exam_registrations (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  student_id CHAR(36) NOT NULL,
  exam_id CHAR(36) NOT NULL,
  payment_order_id CHAR(36) NULL,
  registered_by_type ENUM('STUDENT','SCHOOL','ADMIN') NOT NULL DEFAULT 'STUDENT',
  registered_by_id CHAR(36) NOT NULL,
  status ENUM('PENDING_PAYMENT','PENDING','APPROVED','REJECTED','CANCELLED')
    NOT NULL DEFAULT 'PENDING_PAYMENT',
  admit_card_url VARCHAR(500),
  admit_card_status ENUM('NOT_GENERATED','GENERATED','PUBLISHED')
    NOT NULL DEFAULT 'NOT_GENERATED',
  result_score DECIMAL(7,2),
  result_status ENUM('NOT_AVAILABLE','DRAFT','PUBLISHED')
    NOT NULL DEFAULT 'NOT_AVAILABLE',
  result_metadata JSON,
  certificate_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_exam_registrations_student_id (student_id),
  INDEX idx_exam_registrations_exam_id (exam_id),
  INDEX idx_exam_registrations_payment_order_id (payment_order_id),
  INDEX idx_exam_registrations_status (status),
  UNIQUE KEY uq_exam_registration_student_exam (student_id, exam_id)
);

CREATE TABLE exam_sessions (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  registration_id CHAR(36) NOT NULL UNIQUE,
  session_token VARCHAR(255) NOT NULL UNIQUE,
  status ENUM('ACTIVE','SUBMITTED','EXPIRED') DEFAULT 'ACTIVE',
  time_remaining INT NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  is_flagged TINYINT(1) DEFAULT 0,
  started_at TIMESTAMP NULL,
  completed_at TIMESTAMP NULL,
  last_heartbeat_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE session_answers (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  session_id CHAR(36) NOT NULL,
  question_id CHAR(36) NOT NULL,
  selected_option VARCHAR(10),
  saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_session_answers_session_id (session_id),
  INDEX idx_session_answers_question_id (question_id),
  UNIQUE KEY uq_session_question (session_id, question_id)
);

CREATE TABLE banners (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  title VARCHAR(255),
  image_url VARCHAR(500) NOT NULL,
  is_active TINYINT(1) DEFAULT 1,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE inquiries (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('NEW','RESOLVED') DEFAULT 'NEW',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE admin_roles (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE role_permissions (
  role_id CHAR(36) NOT NULL,
  permission_key VARCHAR(150) NOT NULL,
  PRIMARY KEY (role_id, permission_key)
);

CREATE TABLE admin_staff (
  id CHAR(36) PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  status ENUM('ACTIVE','INACTIVE','SUSPENDED') DEFAULT 'ACTIVE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE admin_staff_roles (
  staff_id CHAR(36) NOT NULL,
  role_id CHAR(36) NOT NULL,
  PRIMARY KEY (staff_id, role_id)
);

CREATE TABLE audit_logs (
  id CHAR(36) PRIMARY KEY,
  actor_id CHAR(36),
  action VARCHAR(255) NOT NULL,
  entity_type VARCHAR(100),
  entity_id CHAR(36),
  ip_address VARCHAR(45),
  metadata JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_audit_actor (actor_id),
  INDEX idx_audit_created (created_at)
);

CREATE TABLE system_settings (
  setting_key VARCHAR(150) PRIMARY KEY,
  setting_value JSON NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE offers (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  code VARCHAR(100),
  starts_at TIMESTAMP NULL,
  ends_at TIMESTAMP NULL,
  is_active TINYINT(1) DEFAULT 1,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE faqs (
  id CHAR(36) PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  is_active TINYINT(1) DEFAULT 1,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  book_id CHAR(36) NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_cart_user_book (user_id, book_id)
);

CREATE TABLE book_reviews (
  id CHAR(36) PRIMARY KEY,
  book_id CHAR(36) NOT NULL,
  user_id CHAR(36) NOT NULL,
  rating TINYINT NOT NULL,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_review_user_book (user_id, book_id)
);

CREATE TABLE refunds (
  id CHAR(36) PRIMARY KEY,
  payment_order_id CHAR(36) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  reason TEXT,
  status ENUM('PENDING','SUCCESS','FAILED') DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE exam_integrity_events (
  id CHAR(36) PRIMARY KEY,
  session_id CHAR(36) NOT NULL,
  event_type VARCHAR(100) NOT NULL,
  metadata JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_integrity_session (session_id)
);

CREATE TABLE notifications (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  type VARCHAR(100) NOT NULL,
  subject VARCHAR(255),
  body TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'DELIVERED',
  read_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_notifications_user (user_id)
);

CREATE TABLE notification_jobs (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36),
  channel VARCHAR(30) NOT NULL,
  template_key VARCHAR(100) NOT NULL,
  payload JSON,
  status ENUM('QUEUED','PROCESSING','SENT','FAILED') DEFAULT 'QUEUED',
  attempts INT DEFAULT 0,
  processed_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_notification_jobs_status (status, created_at)
);

CREATE TABLE files (
  id CHAR(36) PRIMARY KEY,
  owner_id CHAR(36) NOT NULL,
  storage_key VARCHAR(1000) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  content_type VARCHAR(150),
  size_bytes BIGINT DEFAULT 0,
  status ENUM('PENDING','READY','DELETED') DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_files_owner (owner_id)
);

CREATE TABLE report_jobs (
  id CHAR(36) PRIMARY KEY,
  type VARCHAR(100) NOT NULL,
  filters JSON,
  status ENUM('QUEUED','PROCESSING','COMPLETED','FAILED') DEFAULT 'QUEUED',
  output_url VARCHAR(1000),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE gallery_items (
  id CHAR(36) PRIMARY KEY,
  image_url VARCHAR(1000) NOT NULL,
  caption VARCHAR(500),
  is_active TINYINT(1) DEFAULT 1,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE contact_settings (
  id VARCHAR(50) PRIMARY KEY DEFAULT 'default',
  address TEXT,
  phone VARCHAR(100),
  email VARCHAR(255),
  working_hours VARCHAR(255),
  map_url VARCHAR(1000),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE serviceable_pincodes (
  pincode VARCHAR(12) PRIMARY KEY,
  shipping_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  estimated_days INT NOT NULL DEFAULT 7,
  is_active TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE study_resources (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  class_range VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  color VARCHAR(20) NOT NULL DEFAULT '#10275e',
  preview_path VARCHAR(500) NOT NULL DEFAULT '/practice-papers',
  book_id CHAR(36),
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_study_resources_active_order (is_active, display_order)
);

CREATE TABLE about_journey (
  id VARCHAR(50) PRIMARY KEY DEFAULT 'default',
  section_tag VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR(1000) NOT NULL,
  image_alt VARCHAR(255) NOT NULL,
  paragraphs JSON NOT NULL,
  stats JSON NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE practice_papers (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  subject VARCHAR(120) NOT NULL,
  class_label VARCHAR(60) NOT NULL,
  description TEXT,
  duration_minutes INT NOT NULL DEFAULT 60,
  max_marks INT NOT NULL DEFAULT 0,
  instructions JSON NOT NULL,
  sections JSON NOT NULL,
  color VARCHAR(20) NOT NULL DEFAULT '#0d225a',
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_practice_papers_active_order (is_active, display_order)
);

CREATE TABLE team_members (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  details TEXT NOT NULL,
  image_url VARCHAR(1000) NOT NULL,
  image_alt VARCHAR(255),
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_team_members_active_order (is_active, display_order)
);
