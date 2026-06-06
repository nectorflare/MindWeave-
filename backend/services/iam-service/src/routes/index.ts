import { Router } from 'express';
import { login, registerSchool, registerUser } from '../controllers/user.controller';

const router = Router();

router.post('/login', login);
router.post('/register-school', registerSchool);
router.post('/register-user', registerUser);

router.get('/health', (_req, res) => {
  res.json({ service: 'iam-service', status: 'ok' });
});

export default router;