import { FindByNameUserUseCase } from '@/data/use-cases/user';
import { PrismaUserRepository } from '@/infra/prisma/repository';
import { FindByNameUserController } from '@/presentation/controllers/user';

import { Request, Response } from 'express';
export const finByNameUserFactory = async (request: Request, response: Response) => {
  const prismaUserRepository = new PrismaUserRepository();
  const finByNameUserUseCase = new FindByNameUserUseCase(prismaUserRepository);
  const finByNameUserController = new FindByNameUserController(finByNameUserUseCase);
  return await finByNameUserController.handler(request, response);
};
