export interface IEncoder {
  encode: (data: IEncoder.Input<{ value: string; salt?: number }>) => IEncoder.Output<string>;
  decode: (data: IEncoder.Input<{ value: string; hash: string }>) => IEncoder.Output<boolean>;
}

export namespace IEncoder {
  export type Input<T> = T;
  export type Output<T> = Promise<T>;
}
