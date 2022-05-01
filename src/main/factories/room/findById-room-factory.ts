import { FindByIdRoomUseCase } from '@/data/use-cases/room';
import { PrismaRoomRepository } from '@/infra/prisma/repository';
import { FindByIdRoomController } from '@/presentation/controllers/room';

import { Request, Response } from 'express';
export const finByIdRoomFactory = async (request: Request, response: Response) => {
  const prismaRoomRepository = new PrismaRoomRepository();
  const finByIdRoomUseCase = new FindByIdRoomUseCase(prismaRoomRepository);
  const finByIdRoomController = new FindByIdRoomController(finByIdRoomUseCase);
  return await finByIdRoomController.handler(request, response);
};
