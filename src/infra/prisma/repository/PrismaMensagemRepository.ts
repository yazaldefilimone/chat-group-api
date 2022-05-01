import { IMensagemRepository } from '@/data/repositories/mensagem';
import { mensagemRepo, mensagemRepoAll } from '@/data/repositories/mensagem/protocols';
import { PrismaClient } from '@prisma/client';
import { prismaClient } from '../settings';

export class PrismaMensagemRepository implements IMensagemRepository {
  prismaClient: PrismaClient;
  constructor() {
    this.prismaClient = prismaClient;
  }
  async findByUserId({ userId }: { userId: string }): IMensagemRepository.Output<mensagemRepo[] | null> {
    const mensagens = await this.prismaClient.mensagem.findMany({
      where: { userId: userId },
    });
    return mensagens;
  }
  async findByRoomId({ roomId }: { roomId: string }): IMensagemRepository.Output<mensagemRepo[] | null> {
    const mensagens = await this.prismaClient.mensagem.findMany({
      where: { roomId: roomId },
    });
    return mensagens;
  }
  async add(data: IMensagemRepository.Input): IMensagemRepository.Output<mensagemRepoAll> {
    const mensagem = await this.prismaClient.mensagem.create({
      data,
    });

    return mensagem;
  }

  async findById({ id }: { id: string }): IMensagemRepository.Output<mensagemRepo | null> {
    const isUser = await this.prismaClient.mensagem.findFirst({
      where: { id },
    });

    return isUser;
  }

  async delete({ id }: { id: string }): IMensagemRepository.Output<void> {
    const mensagem = await this.prismaClient.mensagem.delete({
      where: { id },
    });
  }
  async findAll(): IMensagemRepository.Output<mensagemRepo[]> {
    const mensagem = await this.prismaClient.mensagem.findMany({});
    return mensagem;
  }
}
