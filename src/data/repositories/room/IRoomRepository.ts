import { roomRepo, roomRepoAll } from './protocols';

export interface IRoomRepository {
  add: (data: IRoomRepository.Input) => IRoomRepository.Output<Omit<roomRepoAll, 'userId'>>;
  findByName: ({ name }: { name: string }) => IRoomRepository.Output<Omit<roomRepo, 'userId'> | null>;
  findByNames: ({ name }: { name: string }) => IRoomRepository.Output<Omit<roomRepo, 'userId'>[] | null>;
  findById: ({ id }: { id: string }) => IRoomRepository.Output<Omit<roomRepo, 'userId'> | null>;
  delete: ({ id }: { id: string }) => IRoomRepository.Output<void>;
  findAll: () => IRoomRepository.Output<Omit<roomRepo, 'userId'>[]>;
}

export namespace IRoomRepository {
  export type Input = roomRepo;
  export type Output<T> = Promise<T>;
}
