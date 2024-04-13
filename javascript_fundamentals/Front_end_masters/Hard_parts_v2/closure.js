// let counter = 0;

function outer() {
  let counter = 0;

  function incrementCounter() {
    // let counter = 0;
    counter++;
    // console.log(counter);
  }

  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
myNewFunction();

const anotherFunc = outer();
anotherFunc();
myNewFunction();

function addByX(x) {
  let num = x;

  function add(start) {
    // console.log('addByX', start + num);
    return start + num;
  }

  return add;
}

const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9
