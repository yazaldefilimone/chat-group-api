import { createRoomFactory } from '@/main/factories/room';
import { authUserJwtMiddleware } from '@/main/routes/middlewares';
import { Router } from 'express';

const roomRoutes = Router();
roomRoutes.post('/room', authUserJwtMiddleware, createRoomFactory);
export { roomRoutes };
