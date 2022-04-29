export interface Encoder {
  encode: (data: Encoder.Input<{ value: string; salt?: number }>) => Encoder.Output<string>;
  decode: (data: Encoder.Input<{ value: string; hash: string }>) => Encoder.Output<boolean>;
}

export namespace Encoder {
  export type Input<T> = Promise<T>;
  export type Output<T> = Promise<T>;
}
