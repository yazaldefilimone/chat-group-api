import { createUserFactory, finByNameUserFactory, loginUserFactory, findAllUserFactory } from '@/main/factories/user';
import { Router } from 'express';

const userRoutes = Router();
userRoutes.post('/signup', createUserFactory);
userRoutes.post('/login', loginUserFactory);
userRoutes.get('/name/:name', finByNameUserFactory);
userRoutes.get('/all', findAllUserFactory);
export { userRoutes };
