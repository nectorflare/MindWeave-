import { ErrorRequestHandler } from 'express';
import { UniqueConstraintError, ValidationError } from 'sequelize';
import { ApiError } from '../utils/http';
import { ResultNotFoundError } from '../services/exam.service';

export const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  if (error instanceof ApiError) {
    res.status(error.status).json({
      success: false,
      error: { code: error.code, message: error.message, requestId: req.header('x-request-id') }
    });
    return;
  }

  if (error instanceof ResultNotFoundError) {
    res.status(404).json({
      success: false,
      error: { code: 'RESULT_NOT_FOUND', message: error.message, requestId: req.header('x-request-id') }
    });
    return;
  }

  if (error instanceof UniqueConstraintError) {
    res.status(409).json({
      success: false,
      error: { code: 'CONFLICT', message: 'The resource already exists', requestId: req.header('x-request-id') }
    });
    return;
  }

  if (error instanceof ValidationError) {
    res.status(400).json({
      success: false,
      error: { code: 'VALIDATION_ERROR', message: error.message, requestId: req.header('x-request-id') }
    });
    return;
  }

  console.error('Unhandled academic-service error', error);
  res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Internal server error',
      requestId: req.header('x-request-id')
    }
  });
};

