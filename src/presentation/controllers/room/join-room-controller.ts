import { IJoinRoomUseCase } from '@/domain/room/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class JoinRoomController implements IController {
  private readonly joinRoomUseCase: IJoinRoomUseCase;
  constructor(joinRoomUseCase: IJoinRoomUseCase) {
    this.joinRoomUseCase = joinRoomUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    try {
      const { roomId } = request.body;
      await this.joinRoomUseCase.perform({ roomId, userId: request.userId });

      return response.status(200).send();
    } catch (err: any) {
      return response.status(500).json({ message: err.message });
    }
  }
}
