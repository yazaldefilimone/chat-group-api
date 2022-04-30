import { createUserFactory } from '@/main/factories/user';
import { Router } from 'express';

const userRoutes = Router();
userRoutes.post('/signup', createUserFactory().handler);
export { userRoutes };
