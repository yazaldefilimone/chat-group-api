import { ICryptography } from '@/data/protocols/cryptography';
import { IMensagemRepository } from '@/data/repositories/mensagem/IMensagemRepository';
import { Mensagem } from '@/domain/mensagem/entity/mensagem';
import { ICreateMensagemUseCase } from '@/domain/mensagem/use-cases';
import { left, right } from '@/shared/error-handler/either';

export class CreateMensagemUseCase implements ICreateMensagemUseCase {
  private readonly mensagemRepository: IMensagemRepository;
  private readonly cryptography: ICryptography;

  constructor(mensagemRepository: IMensagemRepository, cryptography: ICryptography) {
    this.mensagemRepository = mensagemRepository;
    this.cryptography = cryptography;
  }

  async perform(data: ICreateMensagemUseCase.Input): ICreateMensagemUseCase.Output {
    const build = new Mensagem().build(data);

    if (build.isLeft()) return left(build.value);
    const { content } = build.value;

    build.value.content = this.cryptography.encrypt({ data: content });
    const mensagem = await this.mensagemRepository.add(build.value);

    return right(mensagem);
  }
}
