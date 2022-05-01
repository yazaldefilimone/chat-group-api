import { ResponseRoom, roomInput } from '../protocols';

export interface ICreateRoomUseCase {
  perform: (data: ICreateRoomUseCase.Input) => ICreateRoomUseCase.Output;
}

export namespace ICreateRoomUseCase {
  export type Input = roomInput;
  export type Output = Promise<ResponseRoom>;
}
