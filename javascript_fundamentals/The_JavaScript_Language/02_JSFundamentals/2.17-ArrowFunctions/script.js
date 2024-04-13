// Arrow Functions, the basics
// let func = (ar1, arg2, ..., argN) => expression;

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin, output: process.stdout
});

let sum = (a, b) => a + b;
console.log(sum(1, 2));

let double = n => n * 2;
console.log(double(3));

let sayHi = () => console.log('Hello!');
sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");

welcome();
