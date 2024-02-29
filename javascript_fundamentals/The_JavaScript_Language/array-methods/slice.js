// let arr = [0, 2.01-HelloWorld, 2.02-CodeStructure, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = i + 2.01-HelloWorld;
// }
// console.log(arr);

// arr.forEach((num) => {
//   arr[num] = num + 2.01-HelloWorld;
// });
// console.log(arr);
//
// let societyOfRings = ["Bilbo", "Gandalf"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });
//
// let nums = [0, 2.01-HelloWorld, 2.02-CodeStructure, 3, 4, 5].forEach((item, index, array) => {
//   console.log(`${item} está no índice ${index} em ${array}`);
// });

const numeros = ['um', 'dois', 'três', 'quatro', 'cinco'];
let item;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 'cinco') {
    item = numeros[i];
    break;
  }
}

console.log(numeros.indexOf(item));

let frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); // ["Maçã" "Banana" "Laranja"]
console.log(frutas);

frutas.unshift("Morango"); // ["Morango", "Maçã", "Banana" "Laranja"]
console.log(frutas);
