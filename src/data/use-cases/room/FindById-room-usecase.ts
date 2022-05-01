import { IRoomRepository } from '@/data/repositories/room';
import { NotFoundError } from '@/domain/errors';
import { IFindByIdRoomUseCase } from '@/domain/room/use-cases';
import { left, right } from '@/shared/error-handler/either';

export class FindByIdRoomUseCase implements IFindByIdRoomUseCase {
  private readonly roomRepository: IRoomRepository;
  constructor(roomRepository: IRoomRepository) {
    this.roomRepository = roomRepository;
  }

  async perform({ id }: IFindByIdRoomUseCase.Input): IFindByIdRoomUseCase.Output {
    const room = await this.roomRepository.findById({ id });

    if (!room) return left(new NotFoundError('room'));

    return right(room);
  }
}
