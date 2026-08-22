USE edtech_platform;
ALTER TABLE book_orders
  ADD COLUMN buyer_type ENUM('STUDENT','SCHOOL') NOT NULL DEFAULT 'STUDENT',
  ADD COLUMN shipping_address JSON NULL,
  ADD COLUMN subtotal DECIMAL(10,2) NOT NULL DEFAULT 0,
  ADD COLUMN shipping_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  ADD COLUMN tax_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  ADD COLUMN total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  ADD COLUMN cancellation_reason TEXT NULL,
  ADD COLUMN return_status ENUM('NONE','REQUESTED','APPROVED','REJECTED','COMPLETED') NOT NULL DEFAULT 'NONE';
CREATE TABLE IF NOT EXISTS serviceable_pincodes (
  pincode VARCHAR(12) PRIMARY KEY, shipping_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  estimated_days INT NOT NULL DEFAULT 7, is_active TINYINT(1) NOT NULL DEFAULT 1
);
INSERT IGNORE INTO serviceable_pincodes(pincode,shipping_amount,estimated_days) VALUES
('110001',50,5),('560001',40,4),('400001',50,5);
