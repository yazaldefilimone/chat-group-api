import { roomRepo } from './protocols';

export interface IRoomRepository {
  add: (data: IRoomRepository.Input) => IRoomRepository.Output<roomRepo>;
  findByName: ({ name }: { name: string }) => IRoomRepository.Output<roomRepo | null>;
  findByNames: ({ name }: { name: string }) => IRoomRepository.Output<roomRepo[] | null>;
  findById: ({ id }: { id: string }) => IRoomRepository.Output<roomRepo | null>;
  delete: ({ id }: { id: string }) => IRoomRepository.Output<void>;
  findAll: () => IRoomRepository.Output<roomRepo[]>;
}

export namespace IRoomRepository {
  export type Input = roomRepo;
  export type Output<T> = Promise<T>;
}
