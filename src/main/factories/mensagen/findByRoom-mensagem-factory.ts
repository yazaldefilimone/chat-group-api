import { FindByRoomMensagemUseCase } from '@/data/use-cases/mensagem';
import { PrismaMensagemRepository } from '@/infra/prisma/repository';
import { FindByRoomMensagemController } from '@/presentation/controllers/mensagem';

import { Request, Response } from 'express';
export const findByRoomMensagemFactory = async (request: Request, response: Response) => {
  const prismaMensagemRepository = new PrismaMensagemRepository();
  const findByRoomMensagemUseCase = new FindByRoomMensagemUseCase(prismaMensagemRepository);
  const findByRoomMensagemController = new FindByRoomMensagemController(findByRoomMensagemUseCase);
  return await findByRoomMensagemController.handler(request, response);
};
