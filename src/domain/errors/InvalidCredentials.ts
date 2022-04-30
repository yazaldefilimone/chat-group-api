export class InvalidCredentials extends Error {
  constructor(param: string) {
    super(`invalid credential: [${param}].`);
  }
}
