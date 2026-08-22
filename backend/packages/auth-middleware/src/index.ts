import jwt, { JwtPayload } from 'jsonwebtoken';

export type MindWeaveRole = 'STUDENT' | 'SCHOOL_ADMIN' | 'SYS_ADMIN' | 'ADMIN_STAFF';

export interface AuthClaims extends JwtPayload {
  userId: string;
  email?: string;
  role: MindWeaveRole;
  permissions?: string[];
}

export interface AuthRequest {
  headers: Record<string, string | string[] | undefined>;
  user?: AuthClaims;
}

export interface AuthResponse {
  status(code: number): AuthResponse;
  json(body: unknown): unknown;
}

export type Next = (error?: unknown) => void;

const bearer = (header: string | string[] | undefined) => {
  const value = Array.isArray(header) ? header[0] : header;
  return value?.startsWith('Bearer ') ? value.slice(7) : null;
};

export const authenticate = (secret = process.env.JWT_SECRET || '') =>
  (req: AuthRequest, res: AuthResponse, next: Next) => {
    const token = bearer(req.headers.authorization);
    if (!secret || !token) {
      res.status(401).json({ success: false, error: { code: 'UNAUTHENTICATED', message: 'Authentication required' } });
      return;
    }
    try {
      const claims = jwt.verify(token, secret);
      if (typeof claims === 'string' || !claims.userId || !claims.role) throw new Error('Invalid claims');
      req.user = claims as AuthClaims;
      next();
    } catch {
      res.status(401).json({ success: false, error: { code: 'INVALID_TOKEN', message: 'Access token is invalid or expired' } });
    }
  };

export const authorize = (...roles: MindWeaveRole[]) =>
  (req: AuthRequest, res: AuthResponse, next: Next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ success: false, error: { code: 'FORBIDDEN', message: 'Insufficient privileges' } });
      return;
    }
    next();
  };

export const requirePermission = (permission: string) =>
  (req: AuthRequest, res: AuthResponse, next: Next) => {
    if (!req.user?.permissions?.includes(permission) && req.user?.role !== 'SYS_ADMIN') {
      res.status(403).json({ success: false, error: { code: 'FORBIDDEN', message: `Missing permission: ${permission}` } });
      return;
    }
    next();
  };
