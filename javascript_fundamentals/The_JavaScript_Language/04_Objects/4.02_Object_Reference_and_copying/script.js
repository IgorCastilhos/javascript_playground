// Object references and copying
// One of the fundamental differences of objects
// versus primitives is that objects are stored
// and copied “by reference”, whereas primitive
// values: strings, numbers, booleans, etc –
// are always copied “as a whole value”.

// Looking under the hood of what happens when
// we copy a value

let msg = "Hi";
let msgCopy = msg;

// A variable assigned to an object stores not the
// object itself, but a reference to it, its "address
// in memory".

let user = {
  name: "John"
};

// The object is stored somewhere in memory. And the
// variable user has a "reference" to it.

// When we perform actions with the object, e.g. take
// a property user.name, the JavaScript engine looks
// at what's at that address and performs the operation
// on the actual object.

// When an object variable is copied, the reference is
// copied, but the object itself is not duplicated.

let user1 = {name: "John"};
let admin = user1; // Copy the reference
admin.name = "Pete"; // Changed by the "admin" reference
console.log(user1.name); // 'Pete', changes are seen from the "user" reference
console.log(admin.name); // 'Pete', changes are seen from the "user" reference

// Comparison by reference
// Two objects are equal only if they are the same object.
let a = {};
let b = a; // Copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

// and here two independent objects are not equal, even though both are empty:
let a1 = {};
let b1 = {}; // two independent objects

console.log(a1 == b1); // false

console.log();
// Cloning and merging
// What if we need to duplicate an object?
// We can create a new object and replicate the structure
// of the existing one by iterating over its properties and
// copying them on the primitive level.

let user2 = {
  name: "John",
  age: 30
}

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user2) {
  clone[key] = user2[key];
}

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it

console.log(clone.name); // 'Pete', changes are seen
console.log(user2.name); // still 'John' in the original object

// Using object.assign
// Object.assign(dest, [src1, src2, src3...])
// The first argument dest is a target object.
// Further arguments is a list of source objects
// It copies the properties of all source objects into the target dest
// and then returns it as the result.

let user3 = {name: "John"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

// copies all properties from permissions1 and permissions2 into user3
Object.assign(user3, permissions1, permissions2);

// now user3 = {name: "John", canView: true, canEdit: true}
console.log();
console.log(user3.name); // John
console.log(user3.canView); // true
console.log(user3.canEdit); // true
