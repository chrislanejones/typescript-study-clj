// Conditional types

type Useless = Array<number> extends string ? { val: true } : string;

type IsArray<T> = T extends Array<unknown> ? true : never;

type A = IsArray<number>;
type B = IsArray<string>;

// Inferring types

type ArrayOfWhat1<T> = T extends Array<infer U> ? U : never;

type ArrayOfWhat2<T extends Array<unknown>> = T extends Array<infer U>
  ? U
  : never;

// Type Utilites - Return Type of a Function
type GetReturnType<T> = T extends (...args: any[]) => infer U ? U : never;

const fn = ({} = 12);

type X = GetReturnType<typeof for>;

export default null;
