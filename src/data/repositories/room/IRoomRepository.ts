import { roomRepo, roomRepoAll } from './protocols';

export interface IRoomRepository {
  add: (data: IRoomRepository.Input) => IRoomRepository.Output<roomRepoAll>;
  findByName: ({ name }: { name: string }) => IRoomRepository.Output<roomRepo | null>;
  findByNames: ({ name }: { name: string }) => IRoomRepository.Output<roomRepo[] | null>;
  findById: ({ id }: { id: string }) => IRoomRepository.Output<roomRepoAll | null>;
  delete: ({ id }: { id: string }) => IRoomRepository.Output<void>;
  findAll: () => IRoomRepository.Output<roomRepo[]>;
}

export namespace IRoomRepository {
  export type Input = roomRepo;
  export type Output<T> = Promise<T>;
}
