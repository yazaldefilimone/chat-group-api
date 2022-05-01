import { createRoomFactory, finByIdRoomFactory, JoinRoomFactory } from '@/main/factories/room';
import { authUserJwtMiddleware } from '@/main/routes/middlewares';
import { Router } from 'express';

const roomRoutes = Router();
roomRoutes.post('/room', authUserJwtMiddleware, createRoomFactory);
roomRoutes.get('/room/:id', authUserJwtMiddleware, finByIdRoomFactory);
roomRoutes.post('/join', authUserJwtMiddleware, JoinRoomFactory);
export { roomRoutes };
