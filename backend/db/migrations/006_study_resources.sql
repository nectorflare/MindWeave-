USE edtech_platform;

CREATE TABLE IF NOT EXISTS study_resources (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  class_range VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  color VARCHAR(20) NOT NULL DEFAULT '#10275e',
  preview_path VARCHAR(500) NOT NULL DEFAULT '/practice-papers',
  book_id CHAR(36) NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_study_resources_active_order (is_active, display_order)
);

INSERT INTO study_resources(id,title,class_range,description,color,preview_path,is_active,display_order) VALUES
('20000000-0000-4000-8000-000000000001','AI & Technology Olympiad Workbook','Classes 3–11','Complete chapter-wise guide covering AI basics, digital literacy, and logical reasoning with practice sets.','#10275e','/quizzes',1,1),
('20000000-0000-4000-8000-000000000002','Mathematics Olympiad Master Guide','Classes KG–11','Solved problems, shortcut techniques, and advanced reasoning patterns across class levels.','#5b2800','/practice-papers',1,2),
('20000000-0000-4000-8000-000000000003','Science Olympiad Explorer Kit','Classes 1–11','Concept exercises and experiment-based questions that make science engaging.','#00381f','/practice-papers',1,3),
('20000000-0000-4000-8000-000000000004','CareerLab Self-Discovery Workbook','Classes 6–11','Aptitude maps, industry scenarios, and guidance to help students explore future careers.','#2d1169','/about-us',1,4)
ON DUPLICATE KEY UPDATE title=VALUES(title),class_range=VALUES(class_range),description=VALUES(description),color=VALUES(color),preview_path=VALUES(preview_path),is_active=VALUES(is_active),display_order=VALUES(display_order);
