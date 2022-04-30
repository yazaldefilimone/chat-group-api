import { AlreadyExistsError, InvalidParamsError } from '@/domain/errors';
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
type CreateUserError = InvalidParamsError | AlreadyExistsError;
type CreateUserSuccessFully = userCreate;

export type ResponseBuildUser = Either<InvalidParamsError, CreateUserSuccessFully>;
export type ResponseUser = Either<CreateUserError, CreateUserSuccessFully>;
