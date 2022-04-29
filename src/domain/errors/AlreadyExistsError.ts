export class AlreadyExistsError extends Error {
  constructor(param: string) {
    super(`already exists [${param}]`);
  }
}
