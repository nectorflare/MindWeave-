import { NextFunction, Request, Response } from 'express';

export const internalAuth = (req: Request, res: Response, next: NextFunction) => {
  const configuredKey = process.env.INTERNAL_API_KEY;

  // Local development remains usable until a key is configured. Production
  // deployments must set INTERNAL_API_KEY and keep internal routes private.
  if (!configuredKey || req.header('x-internal-api-key') === configuredKey) {
    next();
    return;
  }

  res.status(401).json({
    success: false,
    error: { code: 'INVALID_INTERNAL_CREDENTIALS', message: 'Invalid internal API credentials' }
  });
};

