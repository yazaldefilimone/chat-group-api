import { IEncoder } from '@/data/protocols/encoder';
import { IUserRepository } from '@/data/repositories/user';
import { NotFoundError } from '@/domain/errors';
import { User } from '@/domain/user/entity/user';
import { IFindByNameUserUseCase } from '@/domain/user/use-cases';
import { left, right } from '@/shared/error-handler/either';

export class FindByNameUserUseCase implements IFindByNameUserUseCase {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository, encoder: IEncoder) {
    this.userRepository = userRepository;
  }

  async perform(data: IFindByNameUserUseCase.Input): IFindByNameUserUseCase.Output {
    const isName = new User().nameIsValid(data.name);

    if (isName.isLeft()) return left(isName.value);

    const users = await this.userRepository.findByName({ name: data.name });

    if (!users) return left(new NotFoundError('user'));

    return right(users);
  }
}
