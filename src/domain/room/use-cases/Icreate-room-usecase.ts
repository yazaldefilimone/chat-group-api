import { ResponseRoom, room } from '../protocols';

export interface ICreateRoomUseCase {
  perform: (data: ICreateRoomUseCase.Input) => ICreateRoomUseCase.Output;
}

export namespace ICreateRoomUseCase {
  export type Input = room;
  export type Output = Promise<ResponseRoom>;
}
