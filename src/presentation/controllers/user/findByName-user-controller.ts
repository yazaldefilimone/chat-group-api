import { IFindByNameUserUseCase } from '@/domain/user/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class findByNameUserController implements IController {
  private readonly findByNameUserUseCase: IFindByNameUserUseCase;
  constructor(findByNameUserUseCase: IFindByNameUserUseCase) {
    this.findByNameUserUseCase = findByNameUserUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const sucessOrFailed = await this.findByNameUserUseCase.perform({ name });

    if (sucessOrFailed.isLeft()) {
      return response.status(400).json({ message: sucessOrFailed.value.message });
    }

    return response.status(200).json(sucessOrFailed.value);
  }
}
