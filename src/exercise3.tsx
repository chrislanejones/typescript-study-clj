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
  TYPE: "Cat" as const
  // How to hard code cat so it will never change in TypeScript
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


let things: string | number = Math.random() < 0.5 ? 12;                  

// TypeScript in JavaScript is limited you can only get. 
// String, Number, Boolean, Object, undefined, Null, and Symbol
// Typeof will let you know if it is a number or a string 
if (typeof thing === "string") {
  thing
} else if (typeof thing === "boolean"){
  thing
} else {

}


export default null;