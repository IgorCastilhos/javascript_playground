// no error
let message = "hello";
message = 123456;

let n = 123;
n = 12.441;

// Infinity: represents the mathematical Infinity ∞. It is a special value that's greater than any number.
console.log(1 / 0);

console.log(Infinity);

console.log("not a number" / 2);

console.log(NaN + 1);
console.log(3 * NaN);
console.log("not a number" / 2 + 5);

// BigInt: is a numeric data type that can represent integers of arbitrary length.
// BigInt values are created by appending n to the end of an integer literal or by calling the constructor.
console.log(1234567890123456789012345678901234567890n);

// String: represents a sequence of characters. It is a primitive data type.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello"
// Single quotes: 'Hello'
// Backticks: `Hello`
// Double and single quotes are "simple" quotes. There’s no difference between them in JavaScript.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
let name = "John";
// embed a variable
console.log(`Hello, ${name}!`);
// embed an expression
console.log(`the result is ${1 + 2}`);

// Boolean
// The boolean type has only two values: true and false.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
console.log(isGreater);

// The null value
// It's just a special value which represents "nothing", "empty" or "value unknown".
let age = null;

// The undefined value
// The meaning of undefined is "value is not assigned".
let x;
console.log(x);

// The typeof operator
// The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.
console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"
console.log(typeof null); // "object"
console.log(typeof alert); // "function"
