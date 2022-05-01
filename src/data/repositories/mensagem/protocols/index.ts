import { userCreate } from '@/domain/user/protocols';

export type mensagemRepo = {
  id: string;
  content: string;
  created_at: string;
  roomId: string;
  userId: string;
};

export type mensagemRepoAll = {
  id: string;
  content: string;
  created_at: string;
  roomId: string;
  userId: string;
};
