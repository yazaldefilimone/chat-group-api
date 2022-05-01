import { ResponseRoom } from '../protocols';

export interface IJoinRoomUseCase {
  perform: (data: IJoinRoomUseCase.Input) => IJoinRoomUseCase.Output;
}

export namespace IJoinRoomUseCase {
  export type Input = {
    userId: string;
    roomId: string;
  };

  export type Output = Promise<ResponseRoom>;
}
