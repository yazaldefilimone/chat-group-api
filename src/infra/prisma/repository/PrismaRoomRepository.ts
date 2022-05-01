import { IRoomRepository } from '@/data/repositories/room';
import { roomRepo } from '@/data/repositories/room/protocols';
import { PrismaClient } from '@prisma/client';
import { prismaClient } from '../settings';

export class PrismaRoomRepository implements IRoomRepository {
  prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }
  async add(data: roomRepo): IRoomRepository.Output<roomRepo> {
    const room = await this.prismaClient.room.create({
      data,
    });

    return room;
  }
  async findByName({ name }: { name: string }): IRoomRepository.Output<roomRepo | null> {
    const isUser = await this.prismaClient.room.findFirst({
      where: { name },
    });

    return isUser;
  }

  async findByNames({ name }: { name: string }): IRoomRepository.Output<roomRepo[] | null> {
    const isUser = await this.prismaClient.room.findMany({
      where: { name },
    });

    return isUser;
  }
  async findById({ id }: { id: string }): IRoomRepository.Output<roomRepo | null> {
    const isUser = await this.prismaClient.room.findFirst({
      where: { id },
    });

    return isUser;
  }

  async delete({ id }: { id: string }): IRoomRepository.Output<void> {
    const room = await this.prismaClient.room.delete({
      where: { id },
    });
  }
  async findAll(): IRoomRepository.Output<roomRepo[]> {
    const users = await this.prismaClient.room.findMany();
    return users;
  }
}
