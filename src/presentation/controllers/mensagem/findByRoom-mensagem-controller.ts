import { IFindByRoomMensagemUserUseCase } from '@/domain/mensagem/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class FindByRoomMensagemController implements IController {
  private readonly findByRoomMensagemUserUseCase: IFindByRoomMensagemUserUseCase;
  constructor(findByRoomMensagemUserUseCase: IFindByRoomMensagemUserUseCase) {
    this.findByRoomMensagemUserUseCase = findByRoomMensagemUserUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const { roomId } = request.params;
    const sucessOrFailed = await this.findByRoomMensagemUserUseCase.perform({ roomId });

    if (sucessOrFailed.isLeft()) {
      return response.status(400).json({ message: sucessOrFailed.value.message });
    }

    return response.status(200).json(sucessOrFailed.value);
  }
}
