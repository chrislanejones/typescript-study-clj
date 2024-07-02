// Variance

// The type asked for X but Y was submitted

// Types of Variance
// Covariance: providing something more specific than what you asked for
// You asked for a shape, and I gave you a circle

// Contravariance: providing
// You asked for a circle, and I gave you a shape

// Type Shape = {
//   name: string = "";
// }

// Type Circle = Shape & {
//   radius: number = 0;
// }

class Shape {
  name: string = ""; 
}

class Circle extends Shape {
  radius: number = 0;
}

// new Circle()

let circle Circle = new Circle();
let shape Shape = new Shape();

let shape2: Shape;
shape2 = circle

circle = shape;