import { verifyToken } from '@/shared/security';
import { NextFunction, Request, Response } from 'express';

export function authUserJwtMiddleware(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'No token provided' });
  }

  verifyToken(authHeader, (err: any, decoded: any) => {
    if (err) {
      return response.status(401).json({ error: err.message });
    }

    request.userId = decoded.id as string;

    return next();
  });
}
