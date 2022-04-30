import { createUserFactory, finByNameUserFactory, loginUserFactory } from '@/main/factories/user';
import { Router } from 'express';

const userRoutes = Router();
userRoutes.post('/signup', createUserFactory);
userRoutes.post('/login', loginUserFactory);
userRoutes.get('/name/:name', finByNameUserFactory);
export { userRoutes };
