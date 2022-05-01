export interface ICryptography {
  encrypt: (data: ICryptography.Input) => ICryptography.Output;
  decrypt: boolean;
}
export namespace ICryptography {
  export type Input = {
    data: string;
  };
  export type Output = string;
}
