import { Request, Response } from 'express';
import {
  loginUser,
  registerSchool as registerSchoolService,
  registerUser as registerUserService,
  getAllSchools,
  getAllStudents,
  getSchoolById,
  getStudentById,
  updateSchool as updateSchoolService,
  updateStudent as updateStudentService,
  requestPasswordReset as requestPasswordResetService,
  resetPassword as resetPasswordService,
  changePassword as changePasswordService
} from '../services/user.service';
import fs from 'fs';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const token = await loginUser(email, password);
    return res.json({ token });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Login error:', error);

    if (message === 'User not found') {
      return res.status(404).json({ message });
    }

    if (message === 'Incorrect password') {
      return res.status(400).json({ message });
    }

    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Login error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  if (!req.body.email) return res.status(400).json({ message: 'Email is required' });
  const token = await requestPasswordResetService(String(req.body.email));
  return res.json({
    success: true,
    message: 'If that account exists, password reset instructions have been created.',
    ...(process.env.NODE_ENV !== 'production' && token ? { resetToken: token } : {})
  });
};

export const resetPassword = async (req: Request, res: Response) => {
  if (!req.body.token || !req.body.password || String(req.body.password).length < 8) return res.status(400).json({ message: 'A valid token and password of at least 8 characters are required' });
  try { await resetPasswordService(String(req.body.token), String(req.body.password)); return res.json({ success: true }); }
  catch (error) { return res.status(400).json({ message: (error as Error).message }); }
};

export const changePassword = async (req: Request, res: Response) => {
  const userId = req.header('x-user-id');
  if (!userId || !req.body.currentPassword || !req.body.newPassword || String(req.body.newPassword).length < 8) return res.status(400).json({ message: 'Current password and a new password of at least 8 characters are required' });
  try { await changePasswordService(userId, String(req.body.currentPassword), String(req.body.newPassword)); return res.json({ success: true }); }
  catch (error) { return res.status(400).json({ message: (error as Error).message }); }
};

export const registerSchool = async (req: Request, res: Response) => {
  try {
    const schoolProfile = await registerSchoolService(req.body);
    return res.status(201).json({ schoolProfile });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Register school error:', error);

    if (message === 'Email already in use' || message === 'Passwords do not match' || message === 'Email and password are required' || message === 'Enter a valid email address') {
      return res.status(400).json({ message });
    }

    if (message === 'Missing required fields') {
      return res.status(400).json({ message });
    }

    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Register school error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const studentProfile = await registerUserService(req.body);
    return res.status(201).json({ studentProfile });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Register user error:', error);

    if (message === 'Email already in use' || message === 'Passwords do not match' || message === 'Email and password are required' || message === 'Enter a valid email address') {
      return res.status(400).json({ message });
    }

    if (message === 'Missing required fields') {
      return res.status(400).json({ message });
    }

    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Register user error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSchools = async (_req: Request, res: Response) => {
  try {
    const schools = await getAllSchools();
    return res.json({ schools });
  } catch (error) {
    console.error('Get schools error:', error);
    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Get schools error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getStudents = async (_req: Request, res: Response) => {
  try {
    const students = await getAllStudents();
    return res.json({ students });
  } catch (error) {
    console.error('Get students error:', error);
    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Get students error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSchool = async (req: Request, res: Response) => {
  const schoolId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!schoolId) {
    return res.status(400).json({ message: 'School id is required' });
  }

  try {
    const schoolProfile = await getSchoolById(schoolId);
    return res.json({ schoolProfile });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Get school error:', error);

    if (message === 'School not found') {
      return res.status(404).json({ message });
    }

    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Get school error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getStudent = async (req: Request, res: Response) => {
  const studentId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!studentId) {
    return res.status(400).json({ message: 'Student id is required' });
  }

  try {
    const studentProfile = await getStudentById(studentId);
    return res.json({ studentProfile });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Get student error:', error);

    if (message === 'Student not found') {
      return res.status(404).json({ message });
    }

    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Get student error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateSchool = async (req: Request, res: Response) => {
  const schoolId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!schoolId) {
    return res.status(400).json({ message: 'School id is required' });
  }

  try {
    const schoolProfile = await updateSchoolService(schoolId, req.body);
    return res.json({ schoolProfile });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Update school error:', error);

    if (message === 'School not found') {
      return res.status(404).json({ message });
    }

    if (message === 'Email already in use') {
      return res.status(400).json({ message });
    }

    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Update school error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const studentId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!studentId) {
    return res.status(400).json({ message: 'Student id is required' });
  }

  try {
    const studentProfile = await updateStudentService(studentId, req.body);
    return res.json({ studentProfile });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Update student error:', error);

    if (message === 'Student not found') {
      return res.status(404).json({ message });
    }

    if (message === 'Email already in use') {
      return res.status(400).json({ message });
    }

    try { fs.appendFileSync('./logs/server-errors.log', `[${new Date().toISOString()}] Update student error: ${(error as Error)?.stack || String(error)}\n`); } catch (e) { /* ignore */ }
    return res.status(500).json({ message: 'Internal server error' });
  }
};
