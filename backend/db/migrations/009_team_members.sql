USE edtech_platform;

CREATE TABLE IF NOT EXISTS team_members (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  details TEXT NOT NULL,
  image_url VARCHAR(1000) NOT NULL,
  image_alt VARCHAR(255) NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_team_members_active_order (is_active, display_order)
);

INSERT INTO team_members(id,name,title,details,image_url,image_alt,is_active,display_order) VALUES
('40000000-0000-4000-8000-000000000001','Dr. Aanya Sharma','Founder & Academic Director','A passionate education leader focused on making meaningful academic opportunities accessible to students and schools across India.','https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85','Dr. Aanya Sharma',1,1),
('40000000-0000-4000-8000-000000000002','Rohan Mehta','Head of Learning Programs','Rohan works with educators and subject experts to build practical, engaging learning programs that strengthen understanding and confidence.','https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85','Rohan Mehta',1,2)
ON DUPLICATE KEY UPDATE name=VALUES(name),title=VALUES(title),details=VALUES(details),image_url=VALUES(image_url),image_alt=VALUES(image_alt),is_active=VALUES(is_active),display_order=VALUES(display_order);
