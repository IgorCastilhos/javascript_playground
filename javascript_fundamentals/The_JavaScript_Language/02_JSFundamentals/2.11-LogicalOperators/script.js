// Logical operators
// The AND operator (&&)
// The OR operator (||)
// Precedence of AND && is higher than OR ||
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // false

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder
// if all variables were falsy, "Anonymous" would show up

// The AND && operator does the following:
console.log( true && true ); // true
console.log( false && true ); // false
console.log( true && false ); // false
console.log( false && false ); // false

// The NOT ! operator does the following:
// Returns the opposite of the operand.
console.log( !true ); // false
console.log( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type:
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
