
type Cat = {
  name: string;
  whiskers: number;
};

type Dog {
  name: string;
  obedient: boolean;
};

let catOrDog: Cat | Dog;
let catAndDog: Cat & Dog;

functio dealWithCatOrDog(animal Cat | Dog) {
  if ("whiskers" in animal) {
    
  } else {

  }
}

export default null;