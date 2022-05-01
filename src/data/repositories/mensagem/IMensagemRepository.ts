import { mensagemRepo, mensagemRepoAll } from './protocols';

export interface IMensagemRepository {
  add: (data: IMensagemRepository.Input) => IMensagemRepository.Output<mensagemRepoAll>;
  findByUserId: ({ userId }: { userId: string }) => IMensagemRepository.Output<mensagemRepo[] | null>;
  findById: ({ id }: { id: string }) => IMensagemRepository.Output<mensagemRepo | null>;
  findByRoomId: ({ roomId }: { roomId: string }) => IMensagemRepository.Output<mensagemRepo[] | null>;
  delete: ({ id }: { id: string }) => IMensagemRepository.Output<void>;
  findAll: () => IMensagemRepository.Output<mensagemRepo[]>;
}

export namespace IMensagemRepository {
  export type Input = mensagemRepo;
  export type Output<T> = Promise<T>;
}
