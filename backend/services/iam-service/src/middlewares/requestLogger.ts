import { NextFunction, Request, Response } from 'express';
import { logRequest } from '../logger';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  const logResponse = () => {
    res.removeListener('finish', logResponse);
    res.removeListener('close', logResponse);

    logRequest({
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      ip: req.ip || req.socket.remoteAddress || 'Unknown',
      userAgent: req.get('user-agent') || 'Unknown',
      responseTime: Date.now() - startTime
    });
  };

  res.on('finish', logResponse);
  res.on('close', logResponse);

  next();
};

export default requestLogger;
