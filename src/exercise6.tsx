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


// Build you own Types that are indexed arbitrarily
type CorrectLifeChoices = {
  conference: "RenderATL";
  city: "Atlanta";
  languages: "TypeScript";
};

type ABC = {
 [S: in keyof CorrectLifeChoices as`getS(Capital<S>)`]: CorrectLifeChoices[S];
}

type ThingsThatMatter = { 
   [S in keyof CorrectLifeChoices]: CorrectLifeChoices[S]
}

type XXX = ThingsThatMatter[ "city" | "conference" | "languages"];

const paths = {
  users: "/users",
  userContacts: "/users/contacts",
  user: "/users/:id",
  settings: "/admin/settings",
  billing: "/admin/billing",
  account: "/admin/account",
} as const;

type Paths = typeof paths;

type AllPaths = {
  [P in keyof Paths]: Paths[P]
}[keyof Paths]


type PluckPathsFor_A<T, Path extends string> = T extends `/${Path}/${string}`
  ? T
  : never;


export default null;
