import { CreateMensagemUseCase } from '@/data/use-cases/mensagem';
import { Cryptography } from '@/infra/cryptography';
import { PrismaMensagemRepository } from '@/infra/prisma/repository';
import { CreateMensagemController } from '@/presentation/controllers/mensagem';

import { Request, Response } from 'express';
export const createMensagemFactory = async (request: Request, response: Response) => {
  const cryptography = new Cryptography();
  const prismaMensagemRepository = new PrismaMensagemRepository();
  const createMensagemUseCase = new CreateMensagemUseCase(prismaMensagemRepository, cryptography);
  const createMensagemController = new CreateMensagemController(createMensagemUseCase);
  return await createMensagemController.handler(request, response);
};
