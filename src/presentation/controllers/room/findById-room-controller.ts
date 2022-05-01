import { IFindByIdRoomUseCase } from '@/domain/room/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class FindByIdRoomController implements IController {
  private readonly findByIdRoomUseCase: IFindByIdRoomUseCase;
  constructor(findByIdRoomUseCase: IFindByIdRoomUseCase) {
    this.findByIdRoomUseCase = findByIdRoomUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const sucessOrFailed = await this.findByIdRoomUseCase.perform({ id });

    if (sucessOrFailed.isLeft()) {
      return response.status(400).json({ message: sucessOrFailed.value.message });
    }

    return response.status(200).json(sucessOrFailed.value);
  }
}
