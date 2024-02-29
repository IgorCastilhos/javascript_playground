// Function Declaration

function showMessage() {
  console.log("Hello everyone!");
}

showMessage();


// Local variables
function showMessage2() {
  let message = "Hello I'm Igor!";
  console.log(message);
}

showMessage2();
// console.log(message); // Error: message is not defined

console.log();

// Outer variables
let userName = 'Igor';

function showMessage3() {
  userName = 'Fulano';
  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log("userName before the function call:", userName);
showMessage3();
console.log("userName after the function call:", userName);

console.log();

// Parameters
function showMessage4(from, text) {
  console.log(from + ': ' + text);
}
showMessage4('Igor', 'Hello!');
showMessage4('Fulano', 'How are you?');

// When a value is passed as a function parameter, it's also called an argument
// A parameter is the variable listed inside the parentheses in the function declaration (it's a declaration time term)
// An argument is the value that is sent/passed to the function when it is called (it's a call time term)

// When a function is called, but an argument is not provided, the corresponding parameter is undefined
showMessage4("Ann")

// We can specify the so-called "default" values for parameters
function showMessage5(from, text = "no text given") {
  console.log(from + ': ' + text);
}

showMessage5("Igor");

// Returning a value
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);
