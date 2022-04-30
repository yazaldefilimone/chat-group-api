import { FindAllUserUseCase } from '@/data/use-cases/user';
import { PrismaUserRepository } from '@/infra/prisma/repository';
import { FindAllUserController } from '@/presentation/controllers/user';

import { Request, Response } from 'express';
export const findAllUserFactory = async (request: Request, response: Response) => {
  const prismaUserRepository = new PrismaUserRepository();
  const findAllUserUseCase = new FindAllUserUseCase(prismaUserRepository);
  const findAllUserController = new FindAllUserController(findAllUserUseCase);
  return await findAllUserController.handler(request, response);
};
