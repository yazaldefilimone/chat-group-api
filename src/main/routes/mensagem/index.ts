import { createMensagemFactory, findByRoomMensagemFactory } from '@/main/factories/mensagen';
import { authUserJwtMiddleware } from '@/main/routes/middlewares';
import { Router } from 'express';

const mensagemRoutes = Router();
mensagemRoutes.post('/mensagem', authUserJwtMiddleware, createMensagemFactory);
mensagemRoutes.get('/mensagem/:roomId', authUserJwtMiddleware, findByRoomMensagemFactory);
export { mensagemRoutes };
