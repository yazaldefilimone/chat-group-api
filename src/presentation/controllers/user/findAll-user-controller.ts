import { IFindAllUserUseCase } from '@/domain/user/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class FindAllUserController implements IController {
  private readonly findAllUserUseCase: IFindAllUserUseCase;
  constructor(findAllUserUseCase: IFindAllUserUseCase) {
    this.findAllUserUseCase = findAllUserUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const success = await this.findAllUserUseCase.perform();

    return response.status(200).json(success);
  }
}
