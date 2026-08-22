import { Router } from 'express';
import {
  checkEligibility,
  getPublicExam,
  getPublicSubject,
  getSyllabus,
  getOnlineTest,
  listPublicExams,
  listPublicSubjects,
  listOnlineTests,
  submitOnlineTest
} from '../controllers/academic.controller';
import { asyncHandler } from '../utils/http';

const router = Router();

router.get('/v1/subjects', asyncHandler(listPublicSubjects));
router.get('/v1/subjects/:id', asyncHandler(getPublicSubject));
router.get('/v1/subjects/:id/syllabus', asyncHandler(getSyllabus));
router.get('/v1/online-tests', asyncHandler(listOnlineTests));
router.get('/v1/online-tests/:id', asyncHandler(getOnlineTest));
router.post('/v1/online-tests/:id/submit', asyncHandler(submitOnlineTest));

router.get('/v1/exams/schedules', asyncHandler(listPublicExams));
router.get('/v1/exams/:id/eligibility', asyncHandler(checkEligibility));
router.get('/v1/exams/:id', asyncHandler(getPublicExam));

export default router;
