// Cat and Dog : Cat or Dog
type Cat = {
  name: string;
  whiskers: number;
  catBread: string;
};

type Dog {
  name: string;
  deadly: true
};

type lion {
  name: string;
  obedient: boolean;
};


let catOrDog: Cat | Dog;
let catAndDog: Cat & Dog;

// If In property is actually Javascript
function dealWithCatOrDog(animal: Cat | Dog | Lion) {
  if ("whiskers" in animal) {
    animal.catBread;
  } else {
    animal.obedient;
  }
}

export default null;