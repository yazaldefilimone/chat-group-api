import { CreateRoomUseCase } from '@/data/use-cases/room';
import { PrismaRoomRepository } from '@/infra/prisma/repository';
import { CreateRoomController } from '@/presentation/controllers/room';

import { Request, Response } from 'express';
export const createRoomFactory = async (request: Request, response: Response) => {
  const prismaRoomRepository = new PrismaRoomRepository();
  const createRoomUseCase = new CreateRoomUseCase(prismaRoomRepository);
  const createRoomController = new CreateRoomController(createRoomUseCase);
  return await createRoomController.handler(request, response);
};
