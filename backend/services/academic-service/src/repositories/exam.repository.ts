import { QueryTypes } from 'sequelize';
import { sequelize } from '../config/database';

export interface ResultRecord {
  registrationId: string;
  schoolCode: string | null;
  firstName: string;
  lastName: string;
  classGrade: string | null;
  examTitle: string;
  mode: string | null;
  examDate: Date | string;
  totalMarks: number;
  resultScore: string | number | null;
  subjectName: string;
  sessionStatus: string | null;
  correctAnswers: number;
  certificateUrl: string | null;
}

export const findResultByRegistrationId = async (registrationId: string) => {
  const rows = await sequelize.query<ResultRecord>(`
    SELECT
      er.id AS registrationId,
      sp_school.school_code AS schoolCode,
      sp.first_name AS firstName,
      sp.last_name AS lastName,
      sp.class_grade AS classGrade,
      e.title AS examTitle,
      e.mode AS mode,
      e.start_time AS examDate,
      e.total_marks AS totalMarks,
      er.result_score AS resultScore,
      er.certificate_url AS certificateUrl,
      s.name AS subjectName,
      (SELECT es.status
         FROM exam_sessions es
        WHERE es.registration_id = er.id
        LIMIT 1) AS sessionStatus,
      (SELECT COUNT(*)
         FROM exam_sessions es
         JOIN session_answers sa ON sa.session_id = es.id
         JOIN questions q ON q.id = sa.question_id
        WHERE es.registration_id = er.id
          AND q.exam_id = er.exam_id
          AND sa.selected_option = q.correct_option) AS correctAnswers
    FROM exam_registrations er
    JOIN student_profiles sp ON sp.id = er.student_id
    LEFT JOIN school_profiles sp_school ON sp_school.id = sp.school_id
    JOIN exams e ON e.id = er.exam_id
    JOIN subjects s ON s.id = e.subject_id
    WHERE er.id = :registrationId
    LIMIT 1
  `, {
    replacements: { registrationId },
    type: QueryTypes.SELECT
  });

  return rows[0] ?? null;
};
