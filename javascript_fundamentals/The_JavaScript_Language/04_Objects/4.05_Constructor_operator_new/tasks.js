// Is it possible to create functions A and B such as new A() == new B()?
// function A() { ... }
// function B() { ... }
// let a = new A;
// let b = new B;
// alert( a == b ); // true

let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(new A() == new B()); // true

// Create a constructor function Calculator that creates objects with 3 methods:
// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
  this.read = function() {
    this.a = +prompt('Enter first number', 0);
    this.b = +prompt('Enter second number', 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log('Sum = ' + calculator.sum());
console.log('Mul = ' + calculator.mul());
