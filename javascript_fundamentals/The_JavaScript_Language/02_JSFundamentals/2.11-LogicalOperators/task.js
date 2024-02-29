console.log(null || 2 || undefined); // 2

console.log(console.log(1) || 2 || console.log(3)); // 1, 2

console.log(1 && null && 2);  // null

console.log(console.log(1) && console.log(2)); // 1, undefined

// The result of OR AND OR
console.log(null || 2 && 3 || 4); // 3

console.log();

// Write an “if” condition to check that age is between 14 and 90 inclusively.
let age = 23;
if (age >= 14 && age <= 90) {
  console.log("Age is between 14 and 90");
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
age = 12;
// 1 - if (age < 14 || age > 90)
if (!(age >= 14 && age <= 90)) {
  console.log("Age is not between 14 and 90");
}

console.log();

// Which of these alerts are going to execute?
// The first and third alerts will execute. The second alert will not execute.

// The number -1 is treated as true in a boolean context. The number 0 is treated as false in a boolean context.
// The expression -1 || 0 evaluates to true, so the first alert will execute.
if (-1 || 0) console.log('first');

// The expression -1 && 0 evaluates to false, so the second alert will not execute.
if (-1 && 0) console.log('second');


// Null is treated as false in a boolean context. The number -1 is treated as true in a boolean context. The number 1 is treated as true in a boolean context.
// The expression null || -1 && 1 evaluates to true, so the third alert will execute.
if (null || -1 && 1) console.log('third');

// Check the login
let userName = prompt("Who's there?", "");

if (userName == "Admin") {

  let password = prompt("Password?", "");

  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password == "" || password == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }

} else if (userName == "" || userName == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
