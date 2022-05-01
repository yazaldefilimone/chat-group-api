import { ICreateMensagemUseCase } from '@/domain/mensagem/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class CreateMensagemController implements IController {
  private readonly createMensagemUseCase: ICreateMensagemUseCase;
  constructor(createMensagemUseCase: ICreateMensagemUseCase) {
    this.createMensagemUseCase = createMensagemUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const { content, roomId } = request.body;
    const sucessOrFailed = await this.createMensagemUseCase.perform({ content, roomId, userId: request.userId });

    if (sucessOrFailed.isLeft()) {
      return response.status(400).json({ message: sucessOrFailed.value.message });
    }

    return response.status(200).json(sucessOrFailed.value);
  }
}
