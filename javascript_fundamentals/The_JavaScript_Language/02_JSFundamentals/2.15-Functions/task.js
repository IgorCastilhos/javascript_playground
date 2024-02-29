function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

let age;

function checkAge3(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge4(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
  return a < 5 ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
