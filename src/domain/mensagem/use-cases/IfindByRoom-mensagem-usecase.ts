import { NotFoundError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';
import { ResponseMensagem } from '../protocols';

export interface IFindByRoomMensagemUserUseCase {
  perform: (data: IFindByRoomMensagemUserUseCase.Input) => IFindByRoomMensagemUserUseCase.Output;
}

export namespace IFindByRoomMensagemUserUseCase {
  export type Input = { roomId: string };
  export type Output = Promise<Either<NotFoundError, ResponseMensagem>>;
}
