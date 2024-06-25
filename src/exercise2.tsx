// filter numbers with actual types

const number = [1, 2, 3, 4];

function filter<T>(array: T[], test: (value: T) => boolean): T[] {
  const result: T[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

// infer the generic type
const numArr = [1, 2, 3, 4];
const strArr = ["a", "b"];

const stringFiltered = filter(strArr, (a) => a === "a");

export default null;

// Generic Classes
class Foo<T1, T2> {
  property1?: T1;
  property2?: T2;

  constructor(p1: T1, p2: T2) {
    this.property1 = p1;
    this.property2 = p2;
  }
}

// TypeScript can look at the function and function
// arguments to figure out "T" by working backwards
let fooInst1 = new Foo<number, string>(12, "Hello");

let fooInst2 = new Foo(12, "Hello");
