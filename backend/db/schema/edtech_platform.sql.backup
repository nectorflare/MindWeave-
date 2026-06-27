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
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_student_profiles_user_id (user_id),
  INDEX idx_student_profiles_school_id (school_id)
);

CREATE TABLE subjects (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  syllabus_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE exams (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  subject_id CHAR(36) NOT NULL,
  created_by CHAR(36),
  title VARCHAR(255) NOT NULL,
  start_time TIMESTAMP NOT NULL,
  duration_mins INT NOT NULL,
  total_marks INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_exams_subject_id (subject_id),
  INDEX idx_exams_created_by (created_by),
  INDEX idx_exams_start_time (start_time)
);

CREATE TABLE questions (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  exam_id CHAR(36) NOT NULL,
  created_by CHAR(36),
  question_text TEXT NOT NULL,
  options JSON NOT NULL,
  correct_option VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_questions_exam_id (exam_id),
  INDEX idx_questions_created_by (created_by)
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
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_orders (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  student_id CHAR(36) NOT NULL,
  payment_order_id CHAR(36) NOT NULL,
  tracking_id VARCHAR(255),
  shipping_status ENUM('PENDING','SHIPPED','DELIVERED','CANCELLED') DEFAULT 'PENDING',
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
  payment_order_id CHAR(36) NOT NULL,
  admit_card_url VARCHAR(500),
  result_score DECIMAL(5,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_exam_registrations_student_id (student_id),
  INDEX idx_exam_registrations_exam_id (exam_id),
  INDEX idx_exam_registrations_payment_order_id (payment_order_id)
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
  INDEX idx_session_answers_question_id (question_id)
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
