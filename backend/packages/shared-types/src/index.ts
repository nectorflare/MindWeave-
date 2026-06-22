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
