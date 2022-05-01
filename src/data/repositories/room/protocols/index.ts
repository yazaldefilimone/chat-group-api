import { userCreate } from '@/domain/user/protocols';

export type roomRepo = {
  id: string;
  name: string;
  description: string;
  created_at: string;
};

export type roomRepoAll = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  users: {
    id: string;
    name: string;
    email: string;
    created_at: string;
  }[];
  mensagens: any[];
};
