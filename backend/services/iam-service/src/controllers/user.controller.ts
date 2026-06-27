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
  updateStudent as updateStudentService
} from '../services/user.service';

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

    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const registerSchool = async (req: Request, res: Response) => {
  try {
    const schoolProfile = await registerSchoolService(req.body);
    return res.status(201).json({ schoolProfile });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Register school error:', error);

    if (message === 'Email already in use' || message === 'Passwords do not match' || message === 'Email and password are required') {
      return res.status(400).json({ message });
    }

    if (message === 'Missing required fields') {
      return res.status(400).json({ message });
    }

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

    if (message === 'Email already in use' || message === 'Passwords do not match' || message === 'Email and password are required') {
      return res.status(400).json({ message });
    }

    if (message === 'Missing required fields') {
      return res.status(400).json({ message });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSchools = async (_req: Request, res: Response) => {
  try {
    const schools = await getAllSchools();
    return res.json({ schools });
  } catch (error) {
    console.error('Get schools error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getStudents = async (_req: Request, res: Response) => {
  try {
    const students = await getAllStudents();
    return res.json({ students });
  } catch (error) {
    console.error('Get students error:', error);
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

    return res.status(500).json({ message: 'Internal server error' });
  }
};
