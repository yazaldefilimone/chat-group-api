import { ResponseLogin, user } from '../protocols';

export interface ILoginUserUseCase {
  perform: (data: ILoginUserUseCase.Input) => ILoginUserUseCase.Output;
}

export namespace ILoginUserUseCase {
  export type Input = Omit<user, 'name'>;
  export type Output = Promise<ResponseLogin>;
}
