# Constructor, operator new
The regular `{...}` syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the `new` operator.

### Constructor function
Constructor functions technically are regular functions. There are two conventions though:

1. They are named with capital letter first.
2. They should be executed only with "new" operator.

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Igor");

alert(user.name); // Igor
alert(user.isAdmin); // false
```

When a function is executed with `new`, it does the following steps:

1. A new empty object is created and assigned to `this`.
2. The function body executes. Usually it modifies `this`, adds new properties to it.
3. The value of `this` is returned.

In other words, `new User(...)` does something like:

```javascript
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
```

So `let user = new User("Igor")` gives the same result as:

```javascript
let user = {
  name: "Igor",
  isAdmin: false
};
```
Now if we want to create other users, we can call `new User("Fulano")`, `new User("Maria")` and so on. Much shorter than using literals every time, and also easy to read.

### Return from constructors

Usually, constructors do not have a return statement. Their task is to write all necessary stuff into `this`, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

1. If `return` is called with an object, then the object is returned instead of `this`.
2. If `return` is called with a primitive, it’s ignored.

In other words, `return` with an object returns that object, in all other cases `this` is returned.

```javascript
function BigUser() {
  this.name = "Fulano";

  return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla
```

And here's an example with `return` with a primitive:

```javascript
function SmallUser() {
  this.name = "Fulano";

  return; // <-- returns this
}
 
alert( new SmallUser().name );  // Fulano
``` 

### Methods in constructor

Functions can be added to the constructor if they are needed. For instance, to create a method `sayHi`:

```javascript

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John
```
