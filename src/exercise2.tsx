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
