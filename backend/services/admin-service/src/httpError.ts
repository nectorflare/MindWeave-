export type HttpError = Error & { status?: number; code?: string };

export const httpErrorResponse = (error: unknown) => {
  const candidate = error as HttpError;
  const status = Number.isInteger(candidate?.status) && candidate.status! >= 400 && candidate.status! < 600
    ? candidate.status!
    : 500;

  return {
    status,
    body: {
      success: false,
      error: {
        code: candidate?.code || (status === 500 ? 'ADMIN_ERROR' : 'REQUEST_ERROR'),
        message: status === 500 ? 'Internal server error' : candidate?.message || 'Request failed',
      },
    },
  };
};
