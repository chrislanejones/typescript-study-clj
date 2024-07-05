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
