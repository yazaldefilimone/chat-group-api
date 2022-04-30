import { ILoginUserUseCase } from '@/domain/user/use-cases';
import { IController } from '@/presentation/protocols';

import { Request, Response } from 'express';

export class LoginUserController implements IController {
  private readonly loginUserUseCase: ILoginUserUseCase;
  constructor(loginUserUseCase: ILoginUserUseCase) {
    this.loginUserUseCase = loginUserUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const sucessOrFailed = await this.loginUserUseCase.perform({ email, password });

    if (sucessOrFailed.isLeft()) {
      return response.status(400).json({ message: sucessOrFailed.value.message });
    }

    return response.status(200).json(sucessOrFailed.value);
  }
}
