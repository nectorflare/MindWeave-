import { findResultByRegistrationId } from '../repositories/exam.repository';

export class ResultNotFoundError extends Error {}

export const getExamResult = async (registrationId: string) => {
  const record = await findResultByRegistrationId(registrationId);
  if (!record) {
    throw new ResultNotFoundError('Exam result not found');
  }

  const totalMarks = Number(record.totalMarks);
  const obtainedMarks = record.resultScore === null ? null : Number(record.resultScore);
  const percentage = obtainedMarks === null || totalMarks === 0
    ? null
    : Number(((obtainedMarks / totalMarks) * 100).toFixed(2));

  return {
    rollNumber: record.registrationId,
    centerCode: record.schoolCode,
    studentName: `${record.firstName} ${record.lastName}`.trim(),
    class: record.classGrade,
    olympiad: record.examTitle,
    mode: record.mode,
    examDate: new Date(record.examDate).toISOString().slice(0, 10),
    totalMarks,
    obtainedMarks,
    percentage,
    correctAnswers: Number(record.correctAnswers),
    status: record.sessionStatus,
    sectionWise: [{
      section: record.subjectName,
      total: totalMarks,
      obtained: obtainedMarks
    }],
    certificateUrl: record.certificateUrl
  };
};
