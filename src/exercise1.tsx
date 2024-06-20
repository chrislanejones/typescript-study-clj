let s = "Hello";

// This is broken
s = 12;

let b: boolean = true;
let n: number = 12;

// Stop checking please
let a: any;

// all types assignable to unknown, as well, BUT you can't really use it.
// Only check for equality, or use things like instanceof
let u: unknown = 12 as any;

let u1: unknown;
let u2: unknown;

if (u1 == u2) {}
u1.1 ={}

let nev: never;

function dec(){
  return 12;
}

const exp = () => {
  return 12;
}

// void is for functions that return nothing. 
//You don't need it here but you would for function types ... stay tuned
function foo(): void {}

function getNumber(): number {
  return 12;
}

// Won't work
// function getNumber1(): boolean {
//   return 12;
// }

const getNumber2 = (): number => {
  return 12;
};

// Need the numbers
function plus1(val: number): number {
  return val + 1;
}

function logAll(...values: string[]) {
  console.log(...values);
}

logAll("a", "b", "c");

function logAll2(...values: (string | number)[]) {
  console.log(...values);
}
logAll2(1, 2, 3, "y", 5, "z");

type bulltime = boolean | string;

//type useArrowNotColon = (s1: string, s2: string): number;
type useArrowNotColon2 = (s1: string, s2: string) => number;

const fn: bulltime = (s1, s2) => {
  return s1.length + s2.length;
};

const fn2: useArrowNotColon2 = (s3, s4) => {
  console.log(s3, s4);
};

type BoolOrString = boolean | string;

let boolOrString: BoolOrString = true;
boolOrString = "Hello";
// union - we'll just pretend it means or ... more on this later

// types can hold literal valies
type Yes = "YES";


// Javascript Test
// const func1 = function () {};

// const object = {
//   func2: function () {},
// };

// console.log(func1.name);
// // Expected output: "func1"

// console.log(object.func2.name);
// // Expected output: "func2"

// const getNumber2 = () => {
//   return 12;
// };
// console.log(getNumber2());

// const getNumber3 = function () {};
// console.log(getNumber3.name);
