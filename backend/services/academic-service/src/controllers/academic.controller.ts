import { randomUUID } from 'node:crypto';
import { Request, Response } from 'express';
import { Op, QueryTypes, Transaction } from 'sequelize';
import { sequelize } from '../config/database';
import Exam from '../models/Exam';
import ExamRegistration from '../models/ExamRegistration';
import StudentProfile from '../models/StudentProfile';
import {
  createSubject as createSubjectRecord,
  findSubject,
  listSubjects as listSubjectRecords,
  subjectCodeExists,
  updateSubject as updateSubjectRecord
} from '../repositories/subject.repository';
import {
  deleteQuestion as deleteQuestionRecord,
  findQuestion,
  insertQuestion,
  listQuestions as listQuestionRecords,
  QuestionInput,
  updateQuestion as updateQuestionRecord
} from '../repositories/question.repository';
import {
  ApiError,
  optionalString,
  pagination,
  parseDate,
  positiveInteger,
  requireString
} from '../utils/http';
import { getExamResult } from '../services/exam.service';

const SUBJECT_STATUSES = ['DRAFT', 'PUBLISHED', 'ARCHIVED'] as const;
const EXAM_STATUSES = ['DRAFT', 'PUBLISHED', 'CLOSED', 'CANCELLED', 'COMPLETED'] as const;
const REGISTRATION_STATUSES = ['PENDING_PAYMENT', 'PENDING', 'APPROVED', 'REJECTED', 'CANCELLED'] as const;
const RESULT_STATUSES = ['NOT_AVAILABLE', 'DRAFT', 'PUBLISHED'] as const;
const ADMIT_CARD_STATUSES = ['NOT_GENERATED', 'GENERATED', 'PUBLISHED'] as const;
const QUESTION_STATUSES = ['DRAFT', 'PUBLISHED', 'ARCHIVED'] as const;

const enumValue = <T extends readonly string[]>(value: unknown, values: T, name: string) => {
  if (typeof value !== 'string' || !values.includes(value as T[number])) {
    throw new ApiError(400, 'VALIDATION_ERROR', `${name} must be one of: ${values.join(', ')}`);
  }
  return value as T[number];
};

const optionalEnum = <T extends readonly string[]>(value: unknown, values: T, name: string) =>
  value === undefined ? undefined : enumValue(value, values, name);

const asObject = (value: unknown, name: string) => {
  if (value === undefined || value === null) return null;
  if (typeof value !== 'object' || Array.isArray(value)) {
    throw new ApiError(400, 'VALIDATION_ERROR', `${name} must be an object`);
  }
  return value as Record<string, unknown>;
};

const requireUuidParam = (req: Request, name = 'id') => requireString(req.params[name], name);

const examPayload = (body: Record<string, unknown>, partial = false) => {
  const result: Record<string, unknown> = {};
  if (!partial || body.subjectId !== undefined) result.subject_id = requireString(body.subjectId, 'subjectId');
  if (!partial || body.title !== undefined) result.title = requireString(body.title, 'title');
  if (body.description !== undefined) result.description = optionalString(body.description, 'description');
  if (!partial || body.mode !== undefined) result.mode = enumValue(body.mode, ['ONLINE', 'OFFLINE'] as const, 'mode');
  if (!partial || body.startTime !== undefined) result.start_time = parseDate(body.startTime, 'startTime');
  if (body.registrationStartAt !== undefined) result.registration_start_at = parseDate(body.registrationStartAt, 'registrationStartAt');
  if (body.registrationEndAt !== undefined) result.registration_end_at = parseDate(body.registrationEndAt, 'registrationEndAt');
  if (!partial || body.durationMins !== undefined) result.duration_mins = positiveInteger(body.durationMins, 'durationMins');
  if (!partial || body.totalMarks !== undefined) result.total_marks = positiveInteger(body.totalMarks, 'totalMarks');
  if (body.fee !== undefined) {
    const fee = Number(body.fee);
    if (!Number.isFinite(fee) || fee < 0) throw new ApiError(400, 'VALIDATION_ERROR', 'fee must be zero or greater');
    result.fee = fee;
  }
  if (body.currency !== undefined) result.currency = requireString(body.currency, 'currency').toUpperCase();
  if (body.capacity !== undefined && body.capacity !== null) result.capacity = positiveInteger(body.capacity, 'capacity');
  if (body.capacity === null) result.capacity = null;
  if (body.eligibilityCriteria !== undefined) result.eligibility_criteria = asObject(body.eligibilityCriteria, 'eligibilityCriteria');
  if (body.status !== undefined) result.status = enumValue(body.status, EXAM_STATUSES, 'status');
  if (body.createdBy !== undefined) result.created_by = optionalString(body.createdBy, 'createdBy');
  return result;
};

const serializeExam = (exam: Exam) => ({
  id: exam.id,
  subjectId: exam.subject_id,
  title: exam.title,
  description: exam.description,
  mode: exam.mode,
  startTime: exam.start_time,
  registrationStartAt: exam.registration_start_at,
  registrationEndAt: exam.registration_end_at,
  durationMins: exam.duration_mins,
  totalMarks: exam.total_marks,
  fee: Number(exam.fee),
  currency: exam.currency,
  capacity: exam.capacity,
  eligibilityCriteria: exam.eligibility_criteria,
  status: exam.status
});

export const listPublicSubjects = async (_req: Request, res: Response) => {
  const subjects = await listSubjectRecords(true);
  res.json({ success: true, data: subjects });
};

export const getPublicSubject = async (req: Request, res: Response) => {
  const subject = await findSubject(requireUuidParam(req), true);
  if (!subject) throw new ApiError(404, 'SUBJECT_NOT_FOUND', 'Subject not found');
  res.json({ success: true, data: subject });
};

export const getSyllabus = async (req: Request, res: Response) => {
  const subject = await findSubject(requireUuidParam(req), true);
  if (!subject) throw new ApiError(404, 'SUBJECT_NOT_FOUND', 'Subject not found');
  if (!subject.syllabus_url) throw new ApiError(404, 'SYLLABUS_NOT_FOUND', 'Syllabus is not available');
  res.json({ success: true, data: { subjectId: subject.id, syllabusUrl: subject.syllabus_url } });
};

export const listOnlineTests = async (_req: Request, res: Response) => {
  const rows = await sequelize.query(`SELECT e.id,e.title,e.description,e.duration_mins AS durationMins,e.total_marks AS totalMarks,e.eligibility_criteria AS eligibilityCriteria,s.name AS subject
    FROM exams e JOIN subjects s ON s.id=e.subject_id
    WHERE e.status='PUBLISHED' AND e.mode='ONLINE' AND JSON_EXTRACT(e.eligibility_criteria,'$.onlineTest')=true
    ORDER BY e.created_at DESC`, { type: QueryTypes.SELECT });
  res.json({ success: true, data: rows });
};

export const getOnlineTest = async (req: Request, res: Response) => {
  const tests = await sequelize.query<Record<string, unknown>>(`SELECT e.id,e.title,e.description,e.duration_mins AS durationMins,e.total_marks AS totalMarks,e.eligibility_criteria AS eligibilityCriteria,s.name AS subject
    FROM exams e JOIN subjects s ON s.id=e.subject_id
    WHERE e.id=:id AND e.status='PUBLISHED' AND e.mode='ONLINE' AND JSON_EXTRACT(e.eligibility_criteria,'$.onlineTest')=true LIMIT 1`, { replacements: { id: req.params.id }, type: QueryTypes.SELECT });
  if (!tests[0]) throw new ApiError(404, 'ONLINE_TEST_NOT_FOUND', 'Online test not found');
  const questions = await sequelize.query(`SELECT id,question_text AS questionText,options,marks,display_order AS displayOrder FROM questions WHERE exam_id=:id AND status='PUBLISHED' ORDER BY display_order,created_at`, { replacements: { id: req.params.id }, type: QueryTypes.SELECT });
  res.json({ success: true, data: { ...tests[0], questions } });
};

export const submitOnlineTest = async (req: Request, res: Response) => {
  const test = await Exam.findOne({ where: { id: requireUuidParam(req), status: 'PUBLISHED', mode: 'ONLINE' } });
  const criteria = test?.eligibility_criteria as { onlineTest?: boolean } | null;
  if (!test || !criteria?.onlineTest) throw new ApiError(404, 'ONLINE_TEST_NOT_FOUND', 'Online test not found');
  if (!Array.isArray(req.body.answers)) throw new ApiError(400, 'VALIDATION_ERROR', 'answers must be an array');
  const questions = await sequelize.query<{id:string;correctOption:string;marks:number}>('SELECT id,correct_option AS correctOption,marks FROM questions WHERE exam_id=:id AND status=\'PUBLISHED\'', { replacements: { id: req.params.id }, type: QueryTypes.SELECT });
  const answers = new Map(req.body.answers.map((answer: {questionId?:unknown;selectedOption?:unknown}) => [String(answer.questionId), String(answer.selectedOption)]));
  const score = questions.reduce((total, question) => total + (answers.get(question.id) === question.correctOption ? Number(question.marks) : 0), 0);
  res.json({ success: true, data: { score, maxMarks: questions.reduce((total, question) => total + Number(question.marks), 0), totalQuestions: questions.length, answered: answers.size } });
};

export const listInternalSubjects = async (_req: Request, res: Response) => {
  res.json({ success: true, data: await listSubjectRecords(false) });
};

export const createSubject = async (req: Request, res: Response) => {
  const body = req.body as Record<string, unknown>;
  const code = optionalString(body.code, 'code');
  if (code && await subjectCodeExists(code)) {
    throw new ApiError(409, 'SUBJECT_CODE_EXISTS', 'Subject code already exists');
  }
  const subject = await createSubjectRecord({
    name: requireString(body.name, 'name'),
    code,
    description: optionalString(body.description, 'description'),
    syllabusUrl: optionalString(body.syllabusUrl, 'syllabusUrl'),
    status: body.status === undefined ? undefined : enumValue(body.status, SUBJECT_STATUSES, 'status')
  });
  res.status(201).json({ success: true, data: subject });
};

export const updateSubject = async (req: Request, res: Response) => {
  const id = requireUuidParam(req);
  const body = req.body as Record<string, unknown>;
  const code = optionalString(body.code, 'code');
  if (code && await subjectCodeExists(code, id)) {
    throw new ApiError(409, 'SUBJECT_CODE_EXISTS', 'Subject code already exists');
  }
  const subject = await updateSubjectRecord(id, {
    ...(body.name !== undefined ? { name: requireString(body.name, 'name') } : {}),
    ...(body.code !== undefined ? { code } : {}),
    ...(body.description !== undefined ? { description: optionalString(body.description, 'description') } : {}),
    ...(body.syllabusUrl !== undefined ? { syllabusUrl: optionalString(body.syllabusUrl, 'syllabusUrl') } : {}),
    ...(body.status !== undefined ? { status: enumValue(body.status, SUBJECT_STATUSES, 'status') } : {})
  });
  if (!subject) throw new ApiError(404, 'SUBJECT_NOT_FOUND', 'Subject not found');
  res.json({ success: true, data: subject });
};

export const listExams = async (req: Request, res: Response, internal = false) => {
  const { page, limit, offset } = pagination(req);
  const where: Record<string, unknown> = {};
  if (!internal) where.status = 'PUBLISHED';
  if (req.query.subjectId) where.subject_id = String(req.query.subjectId);
  if (req.query.mode) where.mode = String(req.query.mode).toUpperCase();
  if (internal && req.query.status) where.status = String(req.query.status).toUpperCase();
  if (req.query.upcoming !== 'false') where.start_time = { [Op.gte]: new Date() };
  const { rows, count } = await Exam.findAndCountAll({ where, order: [['start_time', 'ASC']], limit, offset });
  res.json({
    success: true,
    data: rows.map(serializeExam),
    meta: { page, limit, total: count, totalPages: Math.ceil(count / limit) }
  });
};

export const listPublicExams = (req: Request, res: Response) => listExams(req, res, false);
export const listInternalExams = (req: Request, res: Response) => listExams(req, res, true);

export const getExam = async (req: Request, res: Response, internal = false) => {
  const exam = await Exam.findOne({
    where: { id: requireUuidParam(req), ...(internal ? {} : { status: 'PUBLISHED' }) }
  });
  if (!exam) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  res.json({ success: true, data: serializeExam(exam) });
};

export const getPublicExam = (req: Request, res: Response) => getExam(req, res, false);
export const getInternalExam = (req: Request, res: Response) => getExam(req, res, true);

export const createExam = async (req: Request, res: Response) => {
  const input = examPayload(req.body as Record<string, unknown>);
  if (!await findSubject(String(input.subject_id))) {
    throw new ApiError(400, 'SUBJECT_NOT_FOUND', 'subjectId does not reference an existing subject');
  }
  const exam = await Exam.create({ id: randomUUID(), status: 'DRAFT', fee: 0, currency: 'INR', ...input });
  res.status(201).json({ success: true, data: serializeExam(exam) });
};

export const updateExam = async (req: Request, res: Response) => {
  const exam = await Exam.findByPk(requireUuidParam(req));
  if (!exam) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  const input = examPayload(req.body as Record<string, unknown>, true);
  if (input.subject_id && !await findSubject(String(input.subject_id))) {
    throw new ApiError(400, 'SUBJECT_NOT_FOUND', 'subjectId does not reference an existing subject');
  }
  await exam.update(input);
  res.json({ success: true, data: serializeExam(exam) });
};

export const deleteExam = async (req: Request, res: Response) => {
  const id = requireUuidParam(req);
  const exam = await Exam.findByPk(id);
  if (!exam) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  await sequelize.transaction(async transaction => {
    await sequelize.query('DELETE FROM questions WHERE exam_id=:id', { replacements: { id }, transaction });
    await exam.destroy({ transaction });
  });
  res.status(204).send();
};

export const checkEligibility = async (req: Request, res: Response) => {
  const exam = await Exam.findOne({ where: { id: requireUuidParam(req), status: 'PUBLISHED' } });
  if (!exam) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  const studentId = requireString(req.query.studentId, 'studentId');
  const student = await StudentProfile.findByPk(studentId);
  if (!student) throw new ApiError(404, 'STUDENT_NOT_FOUND', 'Student not found');
  const criteria = (exam.eligibility_criteria || {}) as { classGrades?: string[] };
  const reasons: string[] = [];
  if (criteria.classGrades?.length && (!student.class_grade || !criteria.classGrades.includes(student.class_grade))) {
    reasons.push('Student class is not eligible');
  }
  const now = new Date();
  if (exam.registration_start_at && now < exam.registration_start_at) reasons.push('Registration has not opened');
  if (exam.registration_end_at && now > exam.registration_end_at) reasons.push('Registration has closed');
  res.json({ success: true, data: { examId: exam.id, studentId, eligible: reasons.length === 0, reasons } });
};

const questionInput = (body: Record<string, unknown>, partial = false): Partial<QuestionInput> => {
  const value: Partial<QuestionInput> = {};
  if (!partial || body.examId !== undefined) value.examId = requireString(body.examId, 'examId');
  if (!partial || body.questionText !== undefined) value.questionText = requireString(body.questionText, 'questionText');
  if (!partial || body.options !== undefined) {
    if (!Array.isArray(body.options) && (typeof body.options !== 'object' || body.options === null)) {
      throw new ApiError(400, 'VALIDATION_ERROR', 'options must be an array or object');
    }
    value.options = body.options;
  }
  if (!partial || body.correctOption !== undefined) value.correctOption = requireString(body.correctOption, 'correctOption');
  if (body.createdBy !== undefined) value.createdBy = optionalString(body.createdBy, 'createdBy');
  if (body.marks !== undefined) value.marks = positiveInteger(body.marks, 'marks');
  if (body.displayOrder !== undefined) value.displayOrder = Number(body.displayOrder);
  if (body.status !== undefined) value.status = enumValue(body.status, QUESTION_STATUSES, 'status');
  return value;
};

export const listQuestions = async (req: Request, res: Response) => {
  res.json({ success: true, data: await listQuestionRecords(requireString(req.query.examId, 'examId'), true) });
};

export const createQuestion = async (req: Request, res: Response) => {
  const input = questionInput(req.body as Record<string, unknown>) as QuestionInput;
  if (!await Exam.findByPk(input.examId)) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  res.status(201).json({ success: true, data: await insertQuestion(input) });
};

export const updateQuestion = async (req: Request, res: Response) => {
  const result = await updateQuestionRecord(requireUuidParam(req), questionInput(req.body as Record<string, unknown>, true));
  if (!result) throw new ApiError(404, 'QUESTION_NOT_FOUND', 'Question not found');
  res.json({ success: true, data: result });
};

export const deleteQuestion = async (req: Request, res: Response) => {
  if (!await deleteQuestionRecord(requireUuidParam(req))) throw new ApiError(404, 'QUESTION_NOT_FOUND', 'Question not found');
  res.status(204).send();
};

export const importQuestions = async (req: Request, res: Response) => {
  const body = req.body as { examId?: unknown; questions?: unknown };
  const examId = requireString(body.examId, 'examId');
  if (!Array.isArray(body.questions) || body.questions.length === 0 || body.questions.length > 500) {
    throw new ApiError(400, 'VALIDATION_ERROR', 'questions must contain between 1 and 500 items');
  }
  const questions = body.questions as Record<string, unknown>[];
  if (!await Exam.findByPk(examId)) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  const created = await sequelize.transaction(async () => Promise.all(questions.map((item) =>
    insertQuestion({ ...(questionInput(item, true) as QuestionInput), examId })
  )));
  res.status(201).json({ success: true, data: created, meta: { imported: created.length } });
};

const registrationView = async (where: Record<string, unknown>, req: Request) => {
  const { page, limit, offset } = pagination(req);
  const { rows, count } = await ExamRegistration.findAndCountAll({
    where,
    order: [['created_at', 'DESC']],
    limit,
    offset
  });
  return { rows, meta: { page, limit, total: count, totalPages: Math.ceil(count / limit) } };
};

const createRegistrationRecord = async (
  body: Record<string, unknown>,
  transaction?: Transaction
) => {
  const studentId = requireString(body.studentId, 'studentId');
  const examId = requireString(body.examId, 'examId');
  const [student, exam, existing] = await Promise.all([
    StudentProfile.findByPk(studentId, { transaction }),
    Exam.findByPk(examId, { transaction }),
    ExamRegistration.findOne({ where: { student_id: studentId, exam_id: examId }, transaction })
  ]);
  if (!student) throw new ApiError(404, 'STUDENT_NOT_FOUND', 'Student not found');
  if (!exam) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  if (existing) throw new ApiError(409, 'REGISTRATION_EXISTS', 'Student is already registered for this exam');
  if (exam.status !== 'PUBLISHED') throw new ApiError(409, 'EXAM_NOT_OPEN', 'Exam is not open for registration');
  const now = new Date();
  if (exam.registration_start_at && now < exam.registration_start_at) throw new ApiError(409, 'REGISTRATION_NOT_OPEN', 'Registration has not opened');
  if (exam.registration_end_at && now > exam.registration_end_at) throw new ApiError(409, 'REGISTRATION_CLOSED', 'Registration has closed');
  if (exam.capacity) {
    const count = await ExamRegistration.count({
      where: { exam_id: examId, status: { [Op.notIn]: ['REJECTED', 'CANCELLED'] } },
      transaction
    });
    if (count >= exam.capacity) throw new ApiError(409, 'EXAM_CAPACITY_REACHED', 'Exam capacity has been reached');
  }
  const registeredByType = body.registeredByType === undefined
    ? 'STUDENT'
    : enumValue(body.registeredByType, ['STUDENT', 'SCHOOL', 'ADMIN'] as const, 'registeredByType');
  return ExamRegistration.create({
    id: randomUUID(),
    student_id: studentId,
    exam_id: examId,
    payment_order_id: optionalString(body.paymentOrderId, 'paymentOrderId'),
    registered_by_type: registeredByType,
    registered_by_id: requireString(body.registeredById ?? studentId, 'registeredById'),
    status: body.status === undefined
      ? (Number(exam.fee) > 0 ? 'PENDING_PAYMENT' : 'PENDING')
      : enumValue(body.status, REGISTRATION_STATUSES, 'status')
  }, { transaction });
};

export const createRegistration = async (req: Request, res: Response) => {
  const registration = await createRegistrationRecord(req.body as Record<string, unknown>);
  res.status(201).json({ success: true, data: registration });
};

export const bulkCreateRegistrations = async (req: Request, res: Response) => {
  const body = req.body as { registrations?: unknown };
  if (!Array.isArray(body.registrations) || body.registrations.length === 0 || body.registrations.length > 500) {
    throw new ApiError(400, 'VALIDATION_ERROR', 'registrations must contain between 1 and 500 items');
  }
  const registrations = body.registrations as Record<string, unknown>[];
  const records = await sequelize.transaction(async transaction => {
    const created: ExamRegistration[] = [];
    for (const item of registrations) {
      created.push(await createRegistrationRecord(item, transaction));
    }
    return created;
  });
  res.status(201).json({ success: true, data: records, meta: { created: records.length } });
};

export const listRegistrations = async (req: Request, res: Response) => {
  const where: Record<string, unknown> = {};
  if (req.query.studentId) where.student_id = String(req.query.studentId);
  if (req.query.examId) where.exam_id = String(req.query.examId);
  if (req.query.status) where.status = String(req.query.status).toUpperCase();
  if (req.query.registeredById) where.registered_by_id = String(req.query.registeredById);
  const result = await registrationView(where, req);
  res.json({ success: true, data: result.rows, meta: result.meta });
};

export const getRegistration = async (req: Request, res: Response) => {
  const registration = await ExamRegistration.findByPk(requireUuidParam(req));
  if (!registration) throw new ApiError(404, 'REGISTRATION_NOT_FOUND', 'Registration not found');
  res.json({ success: true, data: registration });
};

export const updateRegistrationStatus = async (req: Request, res: Response) => {
  const registration = await ExamRegistration.findByPk(requireUuidParam(req));
  if (!registration) throw new ApiError(404, 'REGISTRATION_NOT_FOUND', 'Registration not found');
  await registration.update({ status: enumValue(req.body.status, REGISTRATION_STATUSES, 'status') });
  res.json({ success: true, data: registration });
};

export const listAdmitCards = async (req: Request, res: Response) => {
  const where: Record<string, unknown> = {};
  if (req.query.studentId) where.student_id = String(req.query.studentId);
  if (req.query.examId) where.exam_id = String(req.query.examId);
  if (req.query.status) where.admit_card_status = String(req.query.status).toUpperCase();
  if (req.query.registeredById) where.registered_by_id = String(req.query.registeredById);
  const result = await registrationView(where, req);
  res.json({
    success: true,
    data: result.rows.map(item => ({
      registrationId: item.id,
      studentId: item.student_id,
      examId: item.exam_id,
      status: item.admit_card_status,
      downloadUrl: item.admit_card_status === 'PUBLISHED' ? item.admit_card_url : null
    })),
    meta: result.meta
  });
};

export const updateAdmitCard = async (req: Request, res: Response) => {
  const registration = await ExamRegistration.findByPk(requireUuidParam(req, 'registrationId'));
  if (!registration) throw new ApiError(404, 'REGISTRATION_NOT_FOUND', 'Registration not found');
  await registration.update({
    admit_card_url: optionalString(req.body.admitCardUrl, 'admitCardUrl'),
    admit_card_status: enumValue(req.body.status, ADMIT_CARD_STATUSES, 'status')
  });
  res.json({ success: true, data: registration });
};

export const publishAdmitCards = async (req: Request, res: Response) => {
  const examId = requireString(req.body.examId, 'examId');
  const [updated] = await ExamRegistration.update(
    { admit_card_status: 'PUBLISHED' },
    { where: { exam_id: examId, admit_card_status: 'GENERATED', admit_card_url: { [Op.ne]: null } } }
  );
  res.json({ success: true, data: { examId, published: updated } });
};

export const listResults = async (req: Request, res: Response) => {
  const where: Record<string, unknown> = {};
  if (req.query.studentId) where.student_id = String(req.query.studentId);
  if (req.query.examId) where.exam_id = String(req.query.examId);
  if (req.query.status) where.result_status = String(req.query.status).toUpperCase();
  const result = await registrationView(where, req);
  res.json({ success: true, data: result.rows, meta: result.meta });
};

export const getResult = async (req: Request, res: Response) => {
  res.json({ success: true, data: await getExamResult(requireUuidParam(req, 'registrationId')) });
};

export const upsertResult = async (req: Request, res: Response) => {
  const registration = await ExamRegistration.findByPk(requireUuidParam(req, 'registrationId'));
  if (!registration) throw new ApiError(404, 'REGISTRATION_NOT_FOUND', 'Registration not found');
  const score = Number(req.body.score);
  if (!Number.isFinite(score) || score < 0) throw new ApiError(400, 'VALIDATION_ERROR', 'score must be zero or greater');
  await registration.update({
    result_score: score,
    result_metadata: asObject(req.body.metadata, 'metadata'),
    result_status: req.body.status === undefined ? 'DRAFT' : enumValue(req.body.status, RESULT_STATUSES, 'status'),
    certificate_url: optionalString(req.body.certificateUrl, 'certificateUrl')
  });
  res.json({ success: true, data: registration });
};

export const publishResults = async (req: Request, res: Response) => {
  const examId = requireString(req.body.examId, 'examId');
  const [updated] = await ExamRegistration.update(
    { result_status: 'PUBLISHED' },
    { where: { exam_id: examId, result_status: 'DRAFT', result_score: { [Op.ne]: null } } }
  );
  res.json({ success: true, data: { examId, published: updated } });
};

export const listCertificates = async (req: Request, res: Response) => {
  const studentId = requireString(req.query.studentId, 'studentId');
  const rows = await ExamRegistration.findAll({
    where: { student_id: studentId, result_status: 'PUBLISHED', certificate_url: { [Op.ne]: null } },
    order: [['updated_at', 'DESC']]
  });
  res.json({
    success: true,
    data: rows.map(row => ({
      registrationId: row.id,
      examId: row.exam_id,
      certificateUrl: row.certificate_url
    }))
  });
};

export const getExamQuestionsForDelivery = async (req: Request, res: Response) => {
  const examId = requireUuidParam(req, 'examId');
  if (!await Exam.findByPk(examId)) throw new ApiError(404, 'EXAM_NOT_FOUND', 'Exam not found');
  res.json({ success: true, data: await listQuestionRecords(examId, false) });
};

export const getAnswerKey = async (req: Request, res: Response) => {
  const examId = requireUuidParam(req, 'examId');
  res.json({ success: true, data: await listQuestionRecords(examId, true) });
};

export const verifyPayment = async (req: Request, res: Response) => {
  const paymentOrderId = requireString(req.body.paymentOrderId, 'paymentOrderId');
  const status = enumValue(req.body.status, ['SUCCESS', 'FAILED'] as const, 'status');
  const registrations = await ExamRegistration.findAll({ where: { payment_order_id: paymentOrderId } });
  if (registrations.length === 0) throw new ApiError(404, 'REGISTRATION_NOT_FOUND', 'No registration uses this payment order');
  if (status === 'SUCCESS') {
    await ExamRegistration.update({ status: 'PENDING' }, {
      where: { payment_order_id: paymentOrderId, status: 'PENDING_PAYMENT' }
    });
  }
  res.json({ success: true, data: { paymentOrderId, affected: registrations.length, paymentStatus: status } });
};

export const serviceSummary = async (_req: Request, res: Response) => {
  const [subjects, exams, registrations, publishedResults] = await Promise.all([
    sequelize.query('SELECT COUNT(*) AS count FROM subjects', { type: QueryTypes.SELECT }),
    sequelize.query('SELECT COUNT(*) AS count FROM exams', { type: QueryTypes.SELECT }),
    sequelize.query('SELECT COUNT(*) AS count FROM exam_registrations', { type: QueryTypes.SELECT }),
    sequelize.query("SELECT COUNT(*) AS count FROM exam_registrations WHERE result_status='PUBLISHED'", { type: QueryTypes.SELECT })
  ]);
  res.json({ success: true, data: { subjects: subjects[0], exams: exams[0], registrations: registrations[0], publishedResults: publishedResults[0] } });
};
