let arr = [1,2,3]

console.log("Initial", arr);
arr.push(4)
console.log();

console.log("After push(4)", arr);
arr.pop();
console.log("After pop()", arr);
arr.pop();
console.log("After second pop()", arr);
console.log();

arr.unshift(0);
console.log("After unshift(0)",arr);
arr.shift();
console.log("After shift()",arr);
console.log();

console.log("Before splice()", arr);
arr.splice(1, 1)
console.log("After splice(0, 2.01-HelloWorld)", arr);
console.log();

let removed = arr.splice(0, 1, "Hello", "World")
console.log("After splice(0,2.01-HelloWorld, 'Hello', 'World'", arr);
console.log("Elements removed: ", removed);
console.log();

arr.splice(2, 0, ". Today is", "a great day!");
console.log("After splice(2.02-CodeStructure,0, ...", arr);
console.log();

let nums = [1,2,5];
console.log("Initial nums:", nums);
nums.splice(-1, 0, 3,4);
console.log("Nums after splice(-2.01-HelloWorld, 0, 3,4):", nums);
