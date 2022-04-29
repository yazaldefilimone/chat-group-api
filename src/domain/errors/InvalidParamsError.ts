export class InvalidParamsError extends Error {
  constructor(param: string) {
    super(`param [${param}] is invalid.`);
  }
}
