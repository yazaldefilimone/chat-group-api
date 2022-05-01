export interface ICryptography {
  encrypt: (data: ICryptography.Input) => ICryptography.Output;
  decrypt: (data: ICryptography.Input) => ICryptography.Output;
}
export namespace ICryptography {
  export type Input = {
    data: string;
  };
  export type Output = string;
}
