import { ResponseUser, user } from '../protocols';

export interface IFindByNameUserUseCase {
  perform: (data: IFindByNameUserUseCase.Input) => IFindByNameUserUseCase.Output;
}

export namespace IFindByNameUserUseCase {
  export type Input = { name: string };
  export type Output = Promise<ResponseUser[]>;
}
