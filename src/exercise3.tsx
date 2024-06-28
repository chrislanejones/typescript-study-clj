// Cat and Dog : Cat or Dog
type Cat = {
  name: string;
  whiskers: number;
  catBreed: string;

  TYPE: "Cat"
};

let myCat = {
  Name: "Muffins",
  whiskers: 12,
  catBreed: "don't care",
  TYPE: "Cat"
}

let someCat: Cat;

someCat = myCat

type Dog {
  name: string;
  obedient: boolean;

  TYPE: "Dog"
};

// type Lion {
//   name: string;
//   deadly: true
// };


let catOrDog: Cat | Dog;
let catAndDog: Cat & Dog;

// If In property is actually Javascript - Bad Version - Wont catch issues if more varibles involved
function dealWithCatOrDog1(animal: Cat | Dog ) {
  if ("whiskers" in animal) {
    animal.catBread;
  } else {
    animal.obedient;
  }
}


// If In property is actually Javascript - Good Version
function dealWithCatOrDog2(animal: Cat | Dog ) {
  if (animal.TYPE === "Cat")

export default null;