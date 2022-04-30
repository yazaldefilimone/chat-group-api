import { IEncoder } from '@/data/protocols/encoder';
import { IUserRepository } from '@/data/repositories/user';
import { InvalidCredentials, InvalidParamsError, NotFoundError } from '@/domain/errors';
import { User } from '@/domain/user/entity/user';
import { ILoginUserUseCase } from '@/domain/user/use-cases';
import { left, right } from '@/shared/error-handler/either';
import { signToken } from '@/shared/security';

export class LoginUserUseCase implements ILoginUserUseCase {
  private readonly userRepository: IUserRepository;
  private readonly encoder: IEncoder;
  constructor(userRepository: IUserRepository, encoder: IEncoder) {
    this.userRepository = userRepository;
    this.encoder = encoder;
  }

  async perform(data: ILoginUserUseCase.Input): ILoginUserUseCase.Output {
    const isEmail = new User().emailIsValid(data.email);

    if (isEmail.isLeft()) return left(new InvalidParamsError('password'));

    const user = await this.userRepository.findByEmail({ email: data.email });

    if (!user) return left(new NotFoundError('user'));

    const isValidPassword = await this.encoder.decode({ value: data.password, hash: user.password });

    if (!isValidPassword) return left(new InvalidCredentials('password'));
    const token = signToken({ userId: user.id });
    return right({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at,
      },
      token,
    });
  }
}
