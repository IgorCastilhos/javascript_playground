// Array.map()
const food = ['apple', 'carrot', 'pear', 'eggplant', 'banana', 'tomato', 'potato', 'avocado'];

// arr.map(callback[, thisArg])
// O map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e
// constrói um novo array com base nos retornos de cada chamada.
// O método map não modifica o array original. No entanto, a função callback invocada por ele pode fazê-lo.
// A lista de elementos que serão processados pelo map é montada antes da primeira invocação à função
// callback. Se um elemento for acrescentado ao array original após a chamada ao map, ele não será visível
// para o callback.
const bananas = food.map(() => 'banana');
console.log(bananas);