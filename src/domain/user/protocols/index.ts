import { AlreadyExistsError, InvalidCredentials, InvalidParamsError, NotFoundError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export type user = {
  name: string;
  email: string;
  password: string;
};
export type userSimples = {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
};
export type userCreate = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
};
export type userLogin = {
  token: string;
  user: Omit<userCreate, 'password'>;
};
type CreateUserError = InvalidParamsError | AlreadyExistsError | NotFoundError | InvalidCredentials;

export type ResponseBuildUser = Either<InvalidParamsError, userCreate>;
export type ResponseUser = Either<CreateUserError, Omit<userCreate, 'password'>>;
export type ResponseLogin = Either<CreateUserError, userLogin>;
