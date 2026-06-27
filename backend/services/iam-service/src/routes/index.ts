import { Router } from 'express';
import {
  login,
  registerSchool,
  registerUser,
  getSchools,
  getStudents,
  getSchool,
  getStudent,
  updateSchool,
  updateStudent
} from '../controllers/user.controller';

const router = Router();

router.post('/login', login);
router.post('/register-school', registerSchool);
router.post('/register-user', registerUser);
router.get('/schools', getSchools);
router.get('/get-schools', getSchools);
router.get('/schools/:id', getSchool);
router.get('/students', getStudents);
router.get('/get-students', getStudents);
router.get('/students/:id', getStudent);
router.put('/schools/:id', updateSchool);
router.put('/update-school/:id', updateSchool);
router.put('/students/:id', updateStudent);
router.put('/update-student/:id', updateStudent);

router.get('/health', (_req, res) => {
  res.json({ service: 'iam-service', status: 'ok' });
});

export default router;