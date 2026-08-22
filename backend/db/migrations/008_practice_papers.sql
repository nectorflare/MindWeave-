USE edtech_platform;

CREATE TABLE IF NOT EXISTS practice_papers (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  subject VARCHAR(120) NOT NULL,
  class_label VARCHAR(60) NOT NULL,
  description TEXT NULL,
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

INSERT INTO practice_papers
(id,title,subject,class_label,description,duration_minutes,max_marks,instructions,sections,color,is_active,display_order)
VALUES
('30000000-0000-4000-8000-000000000001','Mathematics Olympiad Practice Paper','Mathematics','Classes KG–11','Practice mathematical reasoning and problem-solving with this published sample paper.',60,2,
 JSON_ARRAY('Read every question carefully.','Choose one answer for each question.'),
 JSON_ARRAY(JSON_OBJECT('id','A','title','Mathematics and Reasoning','color','blue','questions',JSON_ARRAY(
   JSON_OBJECT('no',1,'text','What is 15 + 27?','options',JSON_ARRAY('32','42','52','62')),
   JSON_OBJECT('no',2,'text','Which number comes next: 2, 4, 8, 16, ...?','options',JSON_ARRAY('18','24','32','36'))
 ))),'#5b2800',1,1),
('30000000-0000-4000-8000-000000000002','Science Olympiad Practice Paper','Science','Classes 1–11','Explore scientific concepts and reasoning with this published sample paper.',60,2,
 JSON_ARRAY('Read every question carefully.','Choose one answer for each question.'),
 JSON_ARRAY(JSON_OBJECT('id','A','title','Science and Observation','color','green','questions',JSON_ARRAY(
   JSON_OBJECT('no',1,'text','Which organ pumps blood through the human body?','options',JSON_ARRAY('Lungs','Heart','Stomach','Kidneys')),
   JSON_OBJECT('no',2,'text','Which planet is known as the Red Planet?','options',JSON_ARRAY('Earth','Venus','Mars','Jupiter'))
 ))),'#00381f',1,2)
ON DUPLICATE KEY UPDATE
 title=VALUES(title),subject=VALUES(subject),class_label=VALUES(class_label),description=VALUES(description),
 duration_minutes=VALUES(duration_minutes),max_marks=VALUES(max_marks),instructions=VALUES(instructions),
 sections=VALUES(sections),color=VALUES(color),is_active=VALUES(is_active),display_order=VALUES(display_order);
