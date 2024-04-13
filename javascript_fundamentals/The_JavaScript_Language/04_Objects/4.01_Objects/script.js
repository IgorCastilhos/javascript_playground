// Objects
// They are used to store keyed collections of various data
// and more complex entities.
// An object can be created with figure brackets {…} with an
// optional list of properties.
// A property is a “key: value” pair, where key is a string
// (also called a “property name”), and value can be anything.
let user = new Object(); // "object constructor" syntax
let user0 = {}; // "object literal" syntax

let user1 = {      // an object
  name: "John",   // by key "name" store value "John"
  age: 30,         // by key "age" store value 30
  isAdmin: true
};

// Access the property
console.log(user1.name); // John
console.log(user1.age); // 30
console.log(user1.isAdmin); // true

// Delete a property
delete user1.age;

// Multiword property names
let user2 = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

console.log(user2["likes birds"]); // true

// Square brackets notation works with any string
let user3 = {};

// set
user3["likes birds"] = true;

// get
console.log(user3["likes birds"]); // true

// delete
delete user3["likes birds"];

// We can use a variable as the key
let key0 = "likes birds";
user3[key0] = true;

// Getting the user input to access the property
let john = {name: "John", age: 30};
let key = prompt("What do you want to know about the user?", "name");
// access by variable
alert(john[key]); // John (if enter "name")

// Computed properties
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5  // the name of the property is taken from the variable fruit
              // So, if a visitor enters "apple", bag will become {apple: 5}
};
console.log(bag.apple); // 5 if fruit="apple"

// Property value shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // same as age: age
  };
}
let user4 = makeUser("John", 30);
console.log(user4.name); // John

// Accessing a property
let igor = {}
console.log(igor.noSuchProperty === undefined); // true means "no such property"

// The "in" operator
let fulano = { name: "Fulano", age: 30 };
console.log("age" in fulano); // true, fulano.age exists
console.log("blabla" in fulano); // false, fulano.blabla doesn't exist

// The "for...in" loop
let user5 = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user5) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user5[key]); // John, 30, true
}

// Ordered like an object
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
