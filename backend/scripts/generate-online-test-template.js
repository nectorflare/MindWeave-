const XLSX = require('xlsx');
const path = require('node:path');

const rows = [
  { question: 'What is 12 multiplied by 8?', optionA: '86', optionB: '92', optionC: '96', optionD: '108', correctAnswer: 'C', marks: 1 },
  { question: 'Which planet is known as the Red Planet?', optionA: 'Earth', optionB: 'Mars', optionC: 'Venus', optionD: 'Jupiter', correctAnswer: 'B', marks: 1 },
  { question: 'Choose the correctly spelled word.', optionA: 'Acheivement', optionB: 'Achievement', optionC: 'Achievment', optionD: 'Acheevement', correctAnswer: 'B', marks: 1 }
];
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(rows), 'Questions');
XLSX.writeFile(workbook, path.join(__dirname, '..', '..', 'frontend', 'public', 'templates', 'online-test-template.xlsx'));
