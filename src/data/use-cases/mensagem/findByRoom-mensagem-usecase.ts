import { IMensagemRepository } from '@/data/repositories/mensagem';
import { NotFoundError } from '@/domain/errors';
import { IFindByRoomMensagemUserUseCase } from '@/domain/mensagem/use-cases';
import { left, right } from '@/shared/error-handler/either';

export class FindByRoomMensagemUseCase implements IFindByRoomMensagemUserUseCase {
  private readonly mensagemRepository: IMensagemRepository;
  constructor(mensagemRepository: IMensagemRepository) {
    this.mensagemRepository = mensagemRepository;
  }

  async perform({ roomId }: IFindByRoomMensagemUserUseCase.Input): IFindByRoomMensagemUserUseCase.Output {
    const mensagem = await this.mensagemRepository.findByRoomId({ roomId });

    if (!mensagem) return left(new NotFoundError('room'));

    return right(mensagem);
  }
}
