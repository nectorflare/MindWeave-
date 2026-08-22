-- Apply this migration to databases created before the complete Academic
-- Service API was introduced. Review existing duplicate registrations before
-- adding the final unique key.

ALTER TABLE subjects
  ADD COLUMN code VARCHAR(50) NULL AFTER name,
  ADD COLUMN description TEXT NULL AFTER code,
  ADD COLUMN status ENUM('DRAFT','PUBLISHED','ARCHIVED') NOT NULL DEFAULT 'DRAFT' AFTER syllabus_url,
  ADD UNIQUE KEY uq_subjects_code (code),
  ADD INDEX idx_subjects_status (status);

ALTER TABLE exams
  ADD COLUMN description TEXT NULL AFTER title,
  MODIFY COLUMN mode ENUM('ONLINE','OFFLINE') NOT NULL,
  ADD COLUMN registration_start_at TIMESTAMP NULL AFTER start_time,
  ADD COLUMN registration_end_at TIMESTAMP NULL AFTER registration_start_at,
  ADD COLUMN fee DECIMAL(10,2) NOT NULL DEFAULT 0.00 AFTER total_marks,
  ADD COLUMN currency VARCHAR(10) NOT NULL DEFAULT 'INR' AFTER fee,
  ADD COLUMN capacity INT NULL AFTER currency,
  ADD COLUMN eligibility_criteria JSON NULL AFTER capacity,
  ADD COLUMN status ENUM('DRAFT','PUBLISHED','CLOSED','CANCELLED','COMPLETED')
    NOT NULL DEFAULT 'DRAFT' AFTER eligibility_criteria,
  ADD INDEX idx_exams_status (status);

ALTER TABLE questions
  ADD COLUMN marks INT NOT NULL DEFAULT 1 AFTER correct_option,
  ADD COLUMN display_order INT NOT NULL DEFAULT 0 AFTER marks,
  ADD COLUMN status ENUM('DRAFT','PUBLISHED','ARCHIVED') NOT NULL DEFAULT 'DRAFT' AFTER display_order,
  ADD INDEX idx_questions_status (status);

ALTER TABLE exam_registrations
  MODIFY COLUMN payment_order_id CHAR(36) NULL,
  ADD COLUMN registered_by_type ENUM('STUDENT','SCHOOL','ADMIN')
    NOT NULL DEFAULT 'STUDENT' AFTER payment_order_id,
  ADD COLUMN registered_by_id CHAR(36) NULL AFTER registered_by_type,
  ADD COLUMN status ENUM('PENDING_PAYMENT','PENDING','APPROVED','REJECTED','CANCELLED')
    NOT NULL DEFAULT 'PENDING_PAYMENT' AFTER registered_by_id,
  ADD COLUMN admit_card_status ENUM('NOT_GENERATED','GENERATED','PUBLISHED')
    NOT NULL DEFAULT 'NOT_GENERATED' AFTER admit_card_url,
  MODIFY COLUMN result_score DECIMAL(7,2) NULL,
  ADD COLUMN result_status ENUM('NOT_AVAILABLE','DRAFT','PUBLISHED')
    NOT NULL DEFAULT 'NOT_AVAILABLE' AFTER result_score,
  ADD COLUMN result_metadata JSON NULL AFTER result_status,
  ADD INDEX idx_exam_registrations_status (status);

UPDATE exam_registrations
   SET registered_by_id = student_id
 WHERE registered_by_id IS NULL;

ALTER TABLE exam_registrations
  MODIFY COLUMN registered_by_id CHAR(36) NOT NULL,
  ADD UNIQUE KEY uq_exam_registration_student_exam (student_id, exam_id);

