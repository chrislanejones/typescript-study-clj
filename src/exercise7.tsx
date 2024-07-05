// Mapped types

// Array.map

const a = [1, 2, "3"].map((val) => {
  // @ts-ignore
  return val + 1;
});

const b = [1, 2, "3"]
  .filter((val): val is number => typeof val === "number")
  .map((val) => {
    return val + 1;
  });

// Prelude

type Union = "A" | "B" | 12 | 42 | "C";
type OnlyStrings<T> = T extends string ? T : never;

type StringsInUnion = OnlyStrings<Union>;

// Object properties with Keyof
type Account = {
  id: number;
  name: string;
  accountId: string;
  gamerId: string;
  myIdentification: string;
};

type IdFields = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}`
    ? K
    : never]: Account[K];
};

type IdFields2 = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: Account[K];
};

type IdTypes = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}`
    ? U
    : never]: Account[K];
};

type IdTypes2 = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}`
    ? U extends ""
      ? never
      : U
    : never]: Account[K];
};

type IdTypes3 = {
  [K in keyof Account as K extends `${infer U}${"Id"}` ? U : never]: Account[K];
};

export default null;
