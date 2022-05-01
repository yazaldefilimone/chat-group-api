import { IRoomRepository } from '@/data/repositories/room';
import { AlreadyExistsError } from '@/domain/errors';
import { Room } from '@/domain/room/entity/room';
import { ICreateRoomUseCase } from '@/domain/room/use-cases';
import { left, right } from '@/shared/error-handler/either';

export class CreateRoomUseCase implements ICreateRoomUseCase {
  private readonly roomRepository: IRoomRepository;
  constructor(roomRepository: IRoomRepository) {
    this.roomRepository = roomRepository;
  }

  async perform(data: ICreateRoomUseCase.Input): ICreateRoomUseCase.Output {
    const build = new Room().build(data);
    if (build.isLeft()) return left(build.value);

    const existsRoom = await this.roomRepository.findByName({ name: build.value.name });

    if (existsRoom) return left(new AlreadyExistsError('room'));

    const room = await this.roomRepository.add(build.value);

    return right(room);
  }
}
