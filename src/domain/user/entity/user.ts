import { ResponseBuildUser, user } from '../protocols';
import { isValidName, isValidEmail, isValidPassword } from '@/shared/validators';
import { Either, left, right } from '@/shared/error-handler/either';

import { v4 as uuid } from 'uuid';
import { InvalidParamsError } from '@/domain/errors';

export class User {
  public nameIsValid(name: string): Either<InvalidParamsError, string> {
    const isValid = isValidName(name);
    return isValid ? right(name) : left(new InvalidParamsError('name'));
  }

  public emailIsValid(email: string): Either<InvalidParamsError, string> {
    const isValid = isValidEmail(email);
    return isValid ? right(email) : left(new InvalidParamsError('email'));
  }

  public passwordIsValid(password: string): Either<InvalidParamsError, string> {
    const isValid = isValidPassword(password);
    return isValid ? right(password) : left(new InvalidParamsError('password'));
  }

  public build({ name, email, password }: user): ResponseBuildUser {
    const validUser = {
      name: this.nameIsValid(name),
      email: this.emailIsValid(email),
      password: this.passwordIsValid(password),
    };

    if (validUser.name.isLeft()) {
      return left(validUser.name.value);
    }

    if (validUser.email.isLeft()) {
      return left(validUser.email.value);
    }

    if (validUser.password.isLeft()) {
      return left(validUser.password.value);
    }

    return right({
      id: uuid(),
      name: validUser.name.value,
      email: validUser.email.value,
      password: validUser.password.value,
      created_at: new Date().toISOString(),
    });
  }
}
