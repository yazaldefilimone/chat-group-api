import { LoginUserUseCase } from '@/data/use-cases/user';
import { Encoder } from '@/infra/encoder';
import { PrismaUserRepository } from '@/infra/prisma/repository';
import { LoginUserController } from '@/presentation/controllers/user';

import { Request, Response } from 'express';
export const loginUserFactory = async (request: Request, response: Response) => {
  const encoder = new Encoder();
  const prismaUserRepository = new PrismaUserRepository();
  const loginUserUseCase = new LoginUserUseCase(prismaUserRepository, encoder);
  const loginUserController = new LoginUserController(loginUserUseCase);
  return await loginUserController.handler(request, response);
};
