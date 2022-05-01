import { mensagem, ResponseMensagem } from '../protocols';

export interface ICreateMensagemUseCase {
  perform: (data: ICreateMensagemUseCase.Input) => ICreateMensagemUseCase.Output;
}

export namespace ICreateMensagemUseCase {
  export type Input = mensagem;
  export type Output = Promise<ResponseMensagem>;
}
