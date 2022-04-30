import { userCreate } from '../protocols';

export interface IFindAllUserUseCase {
  perform: () => IFindAllUserUseCase.Output;
}

export namespace IFindAllUserUseCase {
  export type Output = Promise<Omit<userCreate, 'password'>[]>;
}
