import { Request, Response } from 'express';
import { loginUser, registerSchool as registerSchoolService, registerUser as registerUserService } from '../services/user.service';

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
