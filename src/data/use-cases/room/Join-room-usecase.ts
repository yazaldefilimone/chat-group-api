import { IRoomRepository } from '@/data/repositories/room';
import { IJoinRoomUseCase } from '@/domain/room/use-cases';

export class JoinRoomUseCase implements IJoinRoomUseCase {
  private readonly roomRepository: IRoomRepository;
  constructor(roomRepository: IRoomRepository) {
    this.roomRepository = roomRepository;
  }

  async perform(data: IJoinRoomUseCase.Input): IJoinRoomUseCase.Output {
    const room = this.roomRepository.addUser(data);
  }
}
