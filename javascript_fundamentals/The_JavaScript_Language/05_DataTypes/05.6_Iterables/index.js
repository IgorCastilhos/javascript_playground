for (let value of ["a", "b", "c"]) {
  console.log(value);
}

console.log("----");

for (let char of "hello") {
  console.log(char);
}

console.log("----");

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.from <= this.to) {
      return {done: false, value: this.from++};
    } else {
      return {done: true};
    }
  }
};

console.log("----");

for (let num of range) {
  console.log(num);
}

let infiniteRange = {
  [Symbol.iterator]() {
    let value = 0;
    return {
      next() {
        return {done: false, value: value++};
      }
    };
  }
};

console.log("----");
for (let char of "𝒳😂") {

  console.log(char);
}

console.log("----");

let str = "Hello";
let iterator = str[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

console.log("----");

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str2 = 'x😂A';
console.log(slice(str2, 1, 3)); // 😂A
