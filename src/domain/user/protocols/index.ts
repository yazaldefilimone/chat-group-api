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
type CreateUserSucessFully = userCreate;

export type ResponseBuildUser = Either<InvalidParamsError, CreateUserSucessFully>;
export type ResponseCreateUser = Either<CreateUserError, CreateUserSucessFully>;
