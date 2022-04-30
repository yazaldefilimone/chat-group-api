import { IEncoder } from '@/data/protocols/encoder';
import { IUserRepository } from '@/data/repositories/user';
import { AlreadyExistsError } from '@/domain/errors';
import { User } from '@/domain/user/entity/user';
import { ICreateUserUseCase } from '@/domain/user/use-cases';

import { left, right } from '@/shared/error-handler/either';

export class CreateUserUseCase implements ICreateUserUseCase {
  private readonly userRepository: IUserRepository;
  private readonly encoder: IEncoder;
  constructor(userRepository: IUserRepository, encoder: IEncoder) {
    this.userRepository = userRepository;
    this.encoder = encoder;
  }

  async perform(data: ICreateUserUseCase.Input): ICreateUserUseCase.Output {
    const userBuild = new User().build(data);

    if (userBuild.isLeft()) return left(userBuild.value);

    const isExist = await this.userRepository.findByEmail({ email: userBuild.value.email });

    if (isExist) return left(new AlreadyExistsError('user'));

    userBuild.value.password = await this.encoder.encode({ value: userBuild.value.password });

    const user = await this.userRepository.add(userBuild.value);
    return right({
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
    });
  }
}
