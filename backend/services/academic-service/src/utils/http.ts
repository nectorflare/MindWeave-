import { NextFunction, Request, RequestHandler, Response } from 'express';

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string
  ) {
    super(message);
  }
}

export const asyncHandler = (
  handler: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
): RequestHandler => (req, res, next) => {
  void Promise.resolve(handler(req, res, next)).catch(next);
};

export const requireString = (value: unknown, name: string) => {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new ApiError(400, 'VALIDATION_ERROR', `${name} is required`);
  }
  return value.trim();
};

export const optionalString = (value: unknown, name: string) => {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'string') {
    throw new ApiError(400, 'VALIDATION_ERROR', `${name} must be a string`);
  }
  return value.trim() || null;
};

export const positiveInteger = (value: unknown, name: string) => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new ApiError(400, 'VALIDATION_ERROR', `${name} must be a positive integer`);
  }
  return parsed;
};

export const parseDate = (value: unknown, name: string) => {
  const raw = requireString(value, name);
  const date = new Date(raw);
  if (Number.isNaN(date.valueOf())) {
    throw new ApiError(400, 'VALIDATION_ERROR', `${name} must be a valid ISO date`);
  }
  return date;
};

export const pagination = (req: Request) => {
  const page = Math.max(1, Number.parseInt(String(req.query.page || '1'), 10) || 1);
  const limit = Math.min(100, Math.max(1, Number.parseInt(String(req.query.limit || '20'), 10) || 20));
  return { page, limit, offset: (page - 1) * limit };
};

