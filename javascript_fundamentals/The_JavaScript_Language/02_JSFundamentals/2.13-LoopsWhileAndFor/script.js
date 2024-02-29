// While
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do...while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for loop
// for (let begin; let condition; let step) {
//   ... loop body ...
// }

// begin -> Executes once upon entering the loop
// condition -> Checked before each iteration. If false, the loop stops
// body -> Runs again and again while the condition is truthy
// step -> Executes after the body, before the next iteration

for (let k = 0; k < 3; k++) {
  console.log(k);
}

// Run begin
// -> (if condition -> run body and run step)
// -> (if condition -> run body and run step)
// -> (if condition -> run body and run step)
// ...

// Breaking the loop
let sum = 0;

while (true) {
  let value = console.log("Enter a number", '');
  if (!value) break; // break the loop if value is not a number
  sum += value;
}
console.log('Sum: ' + sum);

// Continue directive doesn't stop the loop. It stops the current iteration and forces the loop to start a new one (if the condition allows)
for (let l = 0; l < 10; l++) {
  if (l % 2 == 0) continue;
  console.log(l); // 1, 3, 5, 7, 9
}

// A loop that shows odd values
for (let m = 0; m < 10; m++) {
  if (m % 2) {
    console.log(m);
  }
}

// Labels for break/continue
// labelName: for (...) {
//   ...
// }

outer: for (let n = 0; n < 3; n++) {
  for (let o = 0; o < 3; o++) {

    let input = console.log(`Value at coords (${n},${o})`, '');

    if (!input) break outer; // break out of both loops

  }
}
console.log('Done!');

// break outer looks upwards for the label named outer and breaks out of the outer loop
// so the control goes straight to alert('Done!').
