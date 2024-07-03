// Conditional types

type Useless = Array<number> extends object ? true : false;

type IsArray<T> = T extends Array<unknown> ? true : false;

type A = IsArray<string[]>;
type B = IsArray<string>;
