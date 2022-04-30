import { env } from '@/shared/env';

import { sign, verify, VerifyCallback } from 'jsonwebtoken';

export function signToken(payload: Object, expires = '10d') {
  const token = sign(payload, env.secret_key, { expiresIn: expires });
  return token;
}

export function verifyToken(token: string, callback: VerifyCallback) {
  verify(token, env.secret_key, callback);
}
