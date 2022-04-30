import { IUserRepository } from '@/data/repositories/user';
import { IFindAllUserUseCase } from '@/domain/user/use-cases';

export class FindAllUserUseCase implements IFindAllUserUseCase {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async perform(): IFindAllUserUseCase.Output {
    const users = await this.userRepository.findAll();

    return users;
  }
}
