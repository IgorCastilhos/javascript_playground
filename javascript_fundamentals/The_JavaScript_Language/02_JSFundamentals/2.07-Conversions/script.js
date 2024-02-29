// String Conversion
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// Numeric Conversion
console.log("6" / "2"); // 3, strings are converted to numbers

// We can use the Number function to explicitly convert a value to a number:
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

// If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number("an arbitrary string instead of a number");  // NaN, conversion failed
console.log(age);

// Numeric conversion rules:
// undefined becomes NaN
// null becomes 0
// true and false becomes 1 and 0
// string: whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
let num2 = Number("   123   ");
console.log(num2); // 123

console.log();
// Boolean Conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
