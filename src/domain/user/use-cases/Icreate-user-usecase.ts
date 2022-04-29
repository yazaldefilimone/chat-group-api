import { ResponseCreateUser, user } from '../protocols';

export interface ICreateUserUseCase {
  perform: (data: ICreateUserUseCase.Input) => ICreateUserUseCase.Output;
}

export namespace ICreateUserUseCase {
  export type Input = user;
  export type Output = Promise<ResponseCreateUser>;
}
