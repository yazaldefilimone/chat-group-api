import { user, userCreate } from './protocols';
import { v4 as uuid } from 'uuid';
export class User {
  static build(data: user): userCreate {
    return {
      ...data,
      id: uuid(),
      created_at: new Date().toISOString(),
    };
  }
}
