// Math
let x = 1;
let y = 2;
console.log("x + y = ", x + y);

// Remainder
let a = 5;
let b = 2;
console.log("a % b = ", a % b);

// Exponentiation
let c = 2;
let d = 3;
console.log("c ** d = ", c ** d);

// String concatenation with + binary +
let str = "Hello, " + "World!";
console.log(str);

// Note that if any of the operands is a string, then the other one is converted to a string too.
console.log("1" + 2);
console.log(2 + "1");

// The binary plus + is the only operator that supports automatic string conversion. Other arithmetic operators work only with numbers and always convert their operands to numbers.
console.log(6 - '2');
console.log('6' / '2');

// Unary +
let apples = "2";
let oranges = "3";
console.log(+apples + +oranges);

// Assignment = returns a value
let z = 1;
let n = 2;
let m = (z = n + 3);
console.log(m);

// Chaining assignments
let q, w, e;
q = w = e = 2 + 2;
console.log(q, w, e);

// Modify in place
let counter = 2;
counter += 2;
console.log(counter);

// Increment and decrement
let counter2 = 1;
console.log(++counter2);
console.log(counter2++);
console.log(counter2);

// Decrement --
let counter3 = 2;
console.log(--counter3);
console.log(counter3--);
console.log(counter3);

console.log();

// Postfix form
// The postfix form counter++ increments counter and returns the old value (prior to the increment)
let counter4 = 1;
console.log('Before incrementing counter4: ' + counter4);

let a2 = counter4++;
console.log('After incrementing counter4: ' + a2);

console.log();

// Prefix form
// The prefix form ++counter increments counter and returns the new value
let counter5 = 1;
console.log('Before incrementing counter5: ' + counter5);

let a3 = ++counter5;
console.log('After incrementing counter5: ' + a3);
