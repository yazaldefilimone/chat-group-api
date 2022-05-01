import { AlreadyExistsError, InvalidCredentials, InvalidParamsError, NotFoundError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export type mensagem = {
  content: string;
  roomId: string;
  userId: string;
};
export type mensagemCreate = {
  id: string;
  content: string;
  roomId: string;
  userId: string;
  created_at: string;
};
export type TypeMensagem = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  roomId: string;
  userId: string;
};

type CreateMensagemError = InvalidParamsError | AlreadyExistsError | NotFoundError;

export type ResponseBuildMensagem = Either<InvalidParamsError, mensagemCreate>;
export type ResponseMensagem = Either<CreateMensagemError, TypeMensagem>;
