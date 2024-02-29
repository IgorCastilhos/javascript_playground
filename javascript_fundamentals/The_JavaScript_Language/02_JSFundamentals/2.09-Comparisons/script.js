// In comparison, boolean is the result
alert( 2 > 1 );  // true
alert( 2 == 1 ); // false
alert( 2 != 1 ); // true

// A string comparison is made based on the lexicographical order
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// When comparing values of different types, JavaScript converts the values to numbers
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// The strict equality operator === doesn't do type conversion
alert( 0 == false ); // true
alert( 0 === false ); // false

// When comparing null and undefined with other values, they behave differently
alert( null == undefined ); // true
alert( null === undefined ); // false

// When comparing null or undefined with any other value, they behave differently
alert( null == 0 ); // false
alert( null > 0 ); // false
alert( null >= 0 ); // true
alert( undefined == 0 ); // false
alert( undefined > 0 ); // false
alert( undefined >= 0 ); // false

// The comparison algorithm is more complex than it seems
