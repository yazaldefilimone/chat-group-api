import { IEncoder } from '@/data/protocols/encoder';

import bcrypt from 'bcryptjs';

export class Encoder implements IEncoder {
  async encode(data: { value: string; salt?: number }): IEncoder.Output<string> {
    const encode = await bcrypt.hash(data.value, data.salt ? data.salt : 8);
    return encode;
  }

  async decode(data: { value: string; hash: string }): IEncoder.Output<boolean> {
    const decode = await bcrypt.compare(data.value, data.hash);
    return decode;
  }
}
