import { userRepo } from './protocols';

export interface IUserRepository {
  add: (data: IUserRepository.Input) => IUserRepository.Output<userRepo>;
  findByName: ({ name }: { name: string }) => IUserRepository.Output<userRepo[] | null>;
  findById: ({ id }: { id: string }) => IUserRepository.Output<userRepo | null>;
  findByEmail: ({ email }: { email: string }) => IUserRepository.Output<userRepo | null>;
  delete: ({ id }: { id: string }) => IUserRepository.Output<void>;
  findAll: () => IUserRepository.Output<userRepo[]>;
  update: (data: IUserRepository.Input) => IUserRepository.Output<userRepo>;
}

export namespace IUserRepository {
  export type Input = userRepo;
  export type Output<T> = Promise<T>;
}
