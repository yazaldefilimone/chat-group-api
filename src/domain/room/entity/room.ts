import { ResponseBuildRoom, room } from '../protocols';
import { isValidName, isValidDescription } from '@/shared/validators';
import { Either, left, right } from '@/shared/error-handler/either';

import { v4 as uuid } from 'uuid';
import { InvalidParamsError } from '@/domain/errors';

export class Room {
  public nameIsValid(name: string): Either<InvalidParamsError, string> {
    const isValid = isValidName(name);
    return isValid ? right(name) : left(new InvalidParamsError('name'));
  }

  public descriptionIsValid(description: string): Either<InvalidParamsError, string> {
    const isValid = isValidDescription(description);
    return isValid ? right(description) : left(new InvalidParamsError('description'));
  }

  public build({ name, description }: room): ResponseBuildRoom {
    const validRoom = {
      name: this.nameIsValid(name),
      description: this.descriptionIsValid(description),
    };

    if (validRoom.name.isLeft()) {
      return left(validRoom.name.value);
    }

    if (validRoom.description.isLeft()) {
      return left(validRoom.description.value);
    }

    return right({
      id: uuid(),
      name: validRoom.name.value,
      description: validRoom.description.value,
      created_at: new Date().toISOString(),
    });
  }
}
