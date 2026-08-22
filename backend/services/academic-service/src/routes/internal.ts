import { Router } from 'express';
import {
  bulkCreateRegistrations,
  createExam,
  createQuestion,
  createRegistration,
  createSubject,
  deleteQuestion,
  deleteExam,
  getAnswerKey,
  getExamQuestionsForDelivery,
  getInternalExam,
  getRegistration,
  getResult,
  importQuestions,
  listAdmitCards,
  listCertificates,
  listInternalExams,
  listInternalSubjects,
  listQuestions,
  listRegistrations,
  listResults,
  publishAdmitCards,
  publishResults,
  serviceSummary,
  updateAdmitCard,
  updateExam,
  updateQuestion,
  updateRegistrationStatus,
  updateSubject,
  upsertResult,
  verifyPayment
} from '../controllers/academic.controller';
import { internalAuth } from '../middlewares/internalAuth';
import { asyncHandler } from '../utils/http';

const router = Router();
router.use(internalAuth);

router.get('/summary', asyncHandler(serviceSummary));

router.get('/subjects', asyncHandler(listInternalSubjects));
router.post('/subjects', asyncHandler(createSubject));
router.put('/subjects/:id', asyncHandler(updateSubject));
router.put('/subjects/:id/syllabus', asyncHandler(updateSubject));

router.get('/exams', asyncHandler(listInternalExams));
router.post('/exams', asyncHandler(createExam));
router.get('/exams/:id', asyncHandler(getInternalExam));
router.put('/exams/:id', asyncHandler(updateExam));
router.patch('/exams/:id/status', asyncHandler(updateExam));
router.delete('/exams/:id', asyncHandler(deleteExam));

router.get('/questions', asyncHandler(listQuestions));
router.post('/questions', asyncHandler(createQuestion));
router.put('/questions/:id', asyncHandler(updateQuestion));
router.delete('/questions/:id', asyncHandler(deleteQuestion));
router.post('/questions/import', asyncHandler(importQuestions));
router.get('/exams/:examId/questions', asyncHandler(getExamQuestionsForDelivery));
router.get('/exams/:examId/answer-key', asyncHandler(getAnswerKey));

router.get('/registrations', asyncHandler(listRegistrations));
router.get('/reports', asyncHandler(listRegistrations));
router.post('/registrations', asyncHandler(createRegistration));
router.post('/registrations/bulk', asyncHandler(bulkCreateRegistrations));
router.get('/registrations/:id', asyncHandler(getRegistration));
router.patch('/registrations/:id/status', asyncHandler(updateRegistrationStatus));
router.post('/registrations/payment-status', asyncHandler(verifyPayment));

router.get('/admit-cards', asyncHandler(listAdmitCards));
router.put('/admit-cards/:registrationId', asyncHandler(updateAdmitCard));
router.post('/admit-cards/publish', asyncHandler(publishAdmitCards));

router.get('/results', asyncHandler(listResults));
router.get('/results/:registrationId', asyncHandler(getResult));
router.put('/results/:registrationId', asyncHandler(upsertResult));
router.post('/results/publish', asyncHandler(publishResults));
router.get('/certificates', asyncHandler(listCertificates));

export default router;
