import { randomUUID } from 'node:crypto';
import { QueryTypes } from 'sequelize';
import { sequelize } from '../config/database';

export interface QuestionInput {
  examId: string;
  createdBy?: string | null;
  questionText: string;
  options: unknown;
  correctOption: string;
  marks?: number;
  displayOrder?: number;
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}

export const listQuestions = (examId: string, includeAnswers = false) => sequelize.query(`
  SELECT id, exam_id AS examId, question_text AS questionText, options,
         marks, display_order AS displayOrder, status
         ${includeAnswers ? ', correct_option AS correctOption' : ''}
    FROM questions
   WHERE exam_id = :examId
   ORDER BY display_order ASC, created_at ASC
`, { replacements: { examId }, type: QueryTypes.SELECT });

export const findQuestion = async (id: string) => {
  const rows = await sequelize.query(`
    SELECT id, exam_id AS examId, created_by AS createdBy,
           question_text AS questionText, options,
           correct_option AS correctOption, marks,
           display_order AS displayOrder, status
      FROM questions WHERE id = :id LIMIT 1
  `, { replacements: { id }, type: QueryTypes.SELECT });
  return rows[0] ?? null;
};

export const insertQuestion = async (input: QuestionInput) => {
  const id = randomUUID();
  await sequelize.query(`
    INSERT INTO questions
      (id, exam_id, created_by, question_text, options, correct_option,
       marks, display_order, status)
    VALUES
      (:id, :examId, :createdBy, :questionText, :options, :correctOption,
       :marks, :displayOrder, :status)
  `, {
    replacements: {
      id,
      examId: input.examId,
      createdBy: input.createdBy || null,
      questionText: input.questionText.trim(),
      options: JSON.stringify(input.options),
      correctOption: input.correctOption.trim(),
      marks: input.marks ?? 1,
      displayOrder: input.displayOrder ?? 0,
      status: input.status || 'DRAFT'
    }
  });
  return findQuestion(id);
};

export const updateQuestion = async (id: string, input: Partial<QuestionInput>) => {
  const current = await findQuestion(id) as Record<string, unknown> | null;
  if (!current) return null;
  const merged = {
    examId: input.examId ?? current.examId,
    createdBy: input.createdBy ?? current.createdBy,
    questionText: input.questionText ?? current.questionText,
    options: input.options ?? current.options,
    correctOption: input.correctOption ?? current.correctOption,
    marks: input.marks ?? current.marks,
    displayOrder: input.displayOrder ?? current.displayOrder,
    status: input.status ?? current.status
  } as QuestionInput;
  await sequelize.query(`
    UPDATE questions
       SET exam_id=:examId, created_by=:createdBy, question_text=:questionText,
           options=:options, correct_option=:correctOption, marks=:marks,
           display_order=:displayOrder, status=:status
     WHERE id=:id
  `, {
    replacements: {
      id,
      ...merged,
      options: JSON.stringify(merged.options)
    }
  });
  return findQuestion(id);
};

export const deleteQuestion = async (id: string) => {
  if (!await findQuestion(id)) return false;
  await sequelize.query('DELETE FROM questions WHERE id=:id', {
    replacements: { id }
  });
  return true;
};
