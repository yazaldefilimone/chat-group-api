import { IUserRepository } from '@/data/repositories/user';
import { userRepo } from '@/data/repositories/user/protocols';
import { PrismaClient } from '@prisma/client';
import { prismaClient } from '../settings';

export class PrismaUserRepository implements IUserRepository {
  prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }
  async add(data: userRepo): IUserRepository.Output<userRepo> {
    const user = await this.prismaClient.user.create({
      data,
    });

    return user;
  }
  async findByName({ name }: { name: string }): IUserRepository.Output<userRepo[] | null> {
    const isUser = await this.prismaClient.user.findMany({
      where: { name },
    });

    return isUser;
  }
  async findById({ id }: { id: string }): IUserRepository.Output<userRepo | null> {
    const isUser = await this.prismaClient.user.findFirst({
      where: { id },
    });

    return isUser;
  }
  async findByEmail({ email }: { email: string }): IUserRepository.Output<userRepo | null> {
    const isUser = await this.prismaClient.user.findFirst({
      where: { email },
    });

    return isUser;
  }
  async delete({ id }: { id: string }): IUserRepository.Output<void> {
    const user = await this.prismaClient.user.delete({
      where: { id },
    });
  }
  async findAll(): IUserRepository.Output<userRepo[]> {
    const users = await this.prismaClient.user.findMany();
    return users;
  }
  async update(data: userRepo): IUserRepository.Output<userRepo> {
    const newUser = await this.prismaClient.user.update({
      where: {
        id: data.id,
      },
      data,
    });
    return newUser;
  }
}
