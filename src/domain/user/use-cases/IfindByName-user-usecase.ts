import { InvalidParamsError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';
import { ResponseUser } from '../protocols';

export interface IFindByNameUserUseCase {
  perform: (data: IFindByNameUserUseCase.Input) => IFindByNameUserUseCase.Output;
}

export namespace IFindByNameUserUseCase {
  export type Input = { name: string };
  export type Output = Promise<Either<InvalidParamsError, ResponseUser[]>>;
}
