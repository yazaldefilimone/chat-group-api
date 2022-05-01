import { ICreateRoomUseCase } from '@/domain/room/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class CreateRoomController implements IController {
  private readonly createRoomUseCase: ICreateRoomUseCase;
  constructor(createRoomUseCase: ICreateRoomUseCase) {
    this.createRoomUseCase = createRoomUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const sucessOrFailed = await this.createRoomUseCase.perform({ name, description, userId: request.userId });

    if (sucessOrFailed.isLeft()) {
      return response.status(400).json({ message: sucessOrFailed.value.message });
    }

    return response.status(200).json(sucessOrFailed.value);
  }
}
