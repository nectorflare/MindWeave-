export type UserRole = 'STUDENT' | 'SCHOOL_ADMIN' | 'SYS_ADMIN';
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED';
export type ShippingStatus = 'PENDING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
export type ExamSessionStatus = 'ACTIVE' | 'SUBMITTED' | 'EXPIRED';

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
}

export interface ApiErrorBody {
  code: string;
  message: string;
  requestId?: string;
  details?: unknown;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  meta?: Record<string, unknown>;
  error?: ApiErrorBody;
}

export interface PageMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
