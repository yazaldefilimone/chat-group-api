import { ICreateUserUseCase } from '@/domain/user/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class CreateUserController implements IController {
  private readonly createUserUseCase: ICreateUserUseCase;
  constructor(createUserUseCase: ICreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const sucessOrFailed = await this.createUserUseCase.perform({ name, email, password });

    if (sucessOrFailed.isLeft()) {
      return response.status(400).json({ message: sucessOrFailed.value.message });
    }

    return response.status(200).json(sucessOrFailed.value);
  }
}
