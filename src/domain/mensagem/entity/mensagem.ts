import { ResponseBuildMensagem, mensagem } from '../protocols';
import { isValidContent } from '@/shared/validators';
import { Either, left, right } from '@/shared/error-handler/either';

import { v4 as uuid } from 'uuid';
import { InvalidParamsError } from '@/domain/errors';

export class Mensagem {
  public contentIsValid(content: string): Either<InvalidParamsError, string> {
    const isValid = isValidContent(content);
    return isValid ? right(content) : left(new InvalidParamsError('content'));
  }

  public build({ content, roomId, userId }: mensagem): ResponseBuildMensagem {
    const validMensagem = {
      content: this.contentIsValid(content),
    };

    if (validMensagem.content.isLeft()) {
      return left(validMensagem.content.value);
    }

    return right({
      id: uuid(),
      content: validMensagem.content.value,
      userId,
      roomId,
      created_at: new Date().toISOString(),
    });
  }
}
