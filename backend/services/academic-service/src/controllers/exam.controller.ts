import { Request, Response } from 'express';
import { getExamResult, ResultNotFoundError } from '../services/exam.service';

export const getResult = async (req: Request, res: Response) => {
  const registrationId = Array.isArray(req.params.registrationId)
    ? req.params.registrationId[0]
    : req.params.registrationId;

  if (!registrationId) {
    return res.status(400).json({ success: false, message: 'Registration id is required' });
  }

  try {
    const data = await getExamResult(registrationId);
    return res.json({ success: true, data });
  } catch (error) {
    if (error instanceof ResultNotFoundError) {
      return res.status(404).json({ success: false, message: error.message });
    }

    console.error('Get exam result error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
