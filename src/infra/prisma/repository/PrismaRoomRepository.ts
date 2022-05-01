import { IRoomRepository } from '@/data/repositories/room';
import { roomRepo, roomRepoAll } from '@/data/repositories/room/protocols';
import { userRepo } from '@/data/repositories/user/protocols';
import { Prisma, prisma, PrismaClient } from '@prisma/client';
import { prismaClient } from '../settings';

export class PrismaRoomRepository implements IRoomRepository {
  prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }
  async add(data: IRoomRepository.Input): IRoomRepository.Output<roomRepoAll> {
    const room = await this.prismaClient.room.create({
      data,
      include: {
        mensagens: true,
        users: true,
      },
    });

    return room;
  }
  async findByName({ name }: { name: string }): IRoomRepository.Output<roomRepo | null> {
    const isRoom = await this.prismaClient.room.findFirst({
      where: { name },
    });

    return isRoom;
  }

  async findByNames({ name }: { name: string }): IRoomRepository.Output<roomRepo[] | null> {
    const isRoom = await this.prismaClient.room.findMany({
      where: { name },
    });

    return isRoom;
  }
  async findById({ id }: { id: string }): IRoomRepository.Output<roomRepoAll | null> {
    const isRoom = await this.prismaClient.room.findFirst({
      where: { id },
      include: {
        users: true,
        mensagens: true,
      },
    });

    return isRoom;
  }

  async delete({ id }: { id: string }): IRoomRepository.Output<void> {
    const room = await this.prismaClient.room.delete({
      where: { id },
    });
  }
  async findAll(): IRoomRepository.Output<roomRepo[]> {
    const rooms = await this.prismaClient.room.findMany({});
    return rooms;
  }

  async findByUser({ userId, roomId }: { roomId: string; userId: string }): IRoomRepository.Output<userRepo[] | undefined> {
    const isRoom = await this.prismaClient.room.findFirst({
      where: { id: roomId },
      include: {
        users: true,
        mensagens: true,
      },
    });

    const users = isRoom?.users.filter((user) => user.id === userId);

    return users;
  }
}
