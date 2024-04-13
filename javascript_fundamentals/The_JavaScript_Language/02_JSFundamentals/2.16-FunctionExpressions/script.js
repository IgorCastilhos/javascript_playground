const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout
});


// Function Expressions

// This is a Function Declaration
function sayHi() {
  console.log("Hello");
}

// This is a Function Expression
let sayHi2 = function () {
  console.log("World!");
};
// Here we can see a var sayHi getting a value, the new function, created as function() { console.log("Hello!"); }
// Omitting a name is allowed for Function Expressions.

// Function is a value
console.log(sayHi2); // [Function: sayHi2]

// In JS, a function is a value, so we can deal with it as with any other value.

// We can copy a function to another variable
let func = sayHi;

func();
sayHi2();

// Callback functions
// We'll write a function ask(question, yes, no) with three parameters:
// question: Text of the question
// yes: Function to run if the answer is "Yes"
// no: Function to run if the answer is "No"
function ask(question, yes, no) {
  rl.question(question + ` (yes/no)\n`, (answer) => {
    if (answer.toLowerCase() === "yes") yes(); else no();
    rl.close();
  });
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

// The arguments showOk and showCancel are called callback functions or just callbacks.
// The idea is that we pass a function and expect it to be "called back" later if necessary. In our case, showOk becomes
// the callback for "yes" and showCancel for "no".

// Shorter version with Function Expressions
function ask3(question, yes, no) {
  if (confirm(question)) yes(); else no();
}

ask3(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
)

// Here functions are declared right inside the ask(...) call. They have no name, and so are called anonymous.
// Such functions are used only in this particular place and are not accessible from the outside.

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };

welcome(); // ok now
