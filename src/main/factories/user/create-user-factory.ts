import { CreateUserUseCase } from '@/data/use-cases/user';
import { Encoder } from '@/infra/encoder';
import { PrismaUserRepository } from '@/infra/prisma/repository';
import { CreateUserController } from '@/presentation/controllers/user';

export const createUserFactory = () => {
  const encoder = new Encoder();
  const prismaUserRepository = new PrismaUserRepository();
  const createUserUseCase = new CreateUserUseCase(prismaUserRepository, encoder);
  const createUserController = new CreateUserController(createUserUseCase);
  return createUserController;
};
