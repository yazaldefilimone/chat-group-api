import { ICryptography } from '@/data/protocols/cryptography';
// import crypto from 'crypto';

export class Cryptography implements ICryptography {
  encrypt(data: ICryptography.Input): ICryptography.Output {
    return data.data;
  }

  decrypt(data: ICryptography.Input): ICryptography.Output {
    return data.data;
  }
}
