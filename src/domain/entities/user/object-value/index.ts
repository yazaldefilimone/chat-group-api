import { Either, left, right } from '@/shared/error-handler/either';
import { isValidName, isValidEmail, isValidPassword } from '@/shared/validators';

export abstract class UserValidator {
  static nameIsValid(name: string): Either<false, true> {
    const isValid = isValidName(name);
    return isValid ? right(isValid) : left(isValid);
  }

  static emailIsValid(email: string): Either<false, true> {
    const isValid = isValidEmail(email);
    return isValid ? right(isValid) : left(isValid);
  }

  static passwordIsValid(password: string): Either<false, true> {
    const isValid = isValidPassword(password);
    return isValid ? right(isValid) : left(isValid);
  }
}
