// The nullish coalescing operator '??' provides a way to choose a first “defined” value from a list.
let a = null;
let b = 5;
result = (a !== null && a !== undefined) ? a : b;
console.log(result); // 5
// if a is defined, then a
// if a is not defined, then b

// The main use case for ?? is to provide a default value.
let user;
console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder

// The OR || operator would work in the same way as in the last example.
console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// ! The important difference is that:
// || returns the first truthy value.
// ?? returns the first defined value.

// || Doesn't distinguish between false, 0, an empty string "", and null/undefined.
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// The height || 100 checks height for being a falsy value, and it's 0, falsy indeed.
// so the result is the second argument 100.
// The height ?? 100 checks height for being defined. It's defined, so the result is 0.

