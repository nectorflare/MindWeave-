USE edtech_platform;

CREATE TABLE IF NOT EXISTS about_journey (
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

INSERT INTO about_journey(id,section_tag,title,image_url,image_alt,paragraphs,stats,is_active) VALUES(
  'default',
  'OUR STORY',
  'Our Journey',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
  'MindWeave students learning together',
  JSON_ARRAY(
    'Mind Weaver Foundation was created to make high-quality academic competitions and learning resources accessible to every student.',
    'Our platform brings students, schools, educators, examinations, books, results, and certificates together in one place.'
  ),
  JSON_ARRAY(
    JSON_OBJECT('value','42,000+','label','Schools Connected'),
    JSON_OBJECT('value','7,00,000+','label','Students Participated'),
    JSON_OBJECT('value','1,00,00,000+','label','Questions Solved'),
    JSON_OBJECT('value','India','label','Presence Across India')
  ),
  1
) ON DUPLICATE KEY UPDATE id=id;
