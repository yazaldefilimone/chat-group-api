import { NotFoundError } from '@/domain/errors';
import { TypeRoom } from '@/domain/room/protocols';
import { Either } from '@/shared/error-handler/either';

export interface IFindByIdRoomUseCase {
  perform: (data: IFindByIdRoomUseCase.Input) => IFindByIdRoomUseCase.Output;
}

export namespace IFindByIdRoomUseCase {
  export type Input = { id: string };
  export type Output = Promise<Either<NotFoundError, TypeRoom>>;
}
