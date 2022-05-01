import { JoinRoomUseCase } from '@/data/use-cases/room';
import { PrismaRoomRepository } from '@/infra/prisma/repository';
import { JoinRoomController } from '@/presentation/controllers/room';

import { Request, Response } from 'express';
export const JoinRoomFactory = async (request: Request, response: Response) => {
  const prismaRoomRepository = new PrismaRoomRepository();
  const joinRoomUseCase = new JoinRoomUseCase(prismaRoomRepository);
  const joinRoomController = new JoinRoomController(joinRoomUseCase);
  return await joinRoomController.handler(request, response);
};
