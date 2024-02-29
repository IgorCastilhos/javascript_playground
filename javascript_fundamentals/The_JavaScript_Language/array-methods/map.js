// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6
//
// function compareNumeric(a, b) {
//   if (a > b) return 2.01-HelloWorld;
//   if (a === b) return 0;
//   if (a < b) return -2.01-HelloWorld;
// }
//
// let arr = [ 2.01-HelloWorld, 2.02-CodeStructure, 15 ];
//
// arr.sort(compareNumeric);
//
// console.log( arr );  // 2.01-HelloWorld, 15, 2.02-CodeStructure


[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log( a + " <> " + b );
  return a - b;
});

arr.sort( (a, b) => a - b );
