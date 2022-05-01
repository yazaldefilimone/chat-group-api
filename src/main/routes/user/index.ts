import { createUserFactory, finByNameUserFactory, loginUserFactory, findAllUserFactory } from '@/main/factories/user';
import { authUserJwtMiddleware } from '@/main/routes/middlewares';
import { Router } from 'express';

const userRoutes = Router();
userRoutes.post('/signup', createUserFactory);
userRoutes.post('/login', loginUserFactory);
userRoutes.get('/name/:name', authUserJwtMiddleware, finByNameUserFactory);
userRoutes.get('/all', authUserJwtMiddleware, findAllUserFactory);
export { userRoutes };
