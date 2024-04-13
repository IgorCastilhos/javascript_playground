# Objects Methods, this

Objects are created to represent entities of the real world, like users, orders and so on:

```javascript
let user = {
  name: "Igor",
  age: 23
};
```

In the real world, a user can _act_: select something from the shopping cart, login, logout, etc.

Actions are represented in JS by functions in properties.

```javascript
let user = {
  name: "Igor",
  age: 23
};

user.sayHi = function () {
  alert("Hello!");
};

user.sayHi(); // Hello!
```

This function expression was used to create a function and assign it to the property `user.sayHi` of the object.

Then we call it as `user.sayHi()`. The user can now speak!

A function that is the property of an object is called its **_method_**.

We could use a pre-declared function as a method, like this:

```javascript
let user = {
  // ...
};

// first declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!
```

### Method shorthand

There exists a shorter syntax for methods in an object literal:

```javascript
// these objects do the same

user = {
  sayHi: function () {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};
```

We can omit `function` and just write `sayHi()`.
There are subtle differences related to object inheritance, but in 99% of cases they do the same thing.

### "this" in methods

It's common that an object method needs to access the information stored in the object to do its job.
For instance, the code inside `user.sayHi()` may need the name of the user.

To access the object, a method can use the `this` keyword.

The value of `this` is the object "before dot", the one used to call the method.

For instance:

```javascript
let user = {
  name: "Igor",
  age: 23,

  sayHi() {
    alert(this.name);
  }
};

user.sayHi(); // Igor
```
During the execution of `user.sayHi()`, the value of `this` will be `user`.

It's also possible to access the object without `this`, by referencing it via the outer variable:

```javascript
let user = {
  name: "Igor",
  age: 23,

  sayHi() {
    alert(user.name); // "user" instead of "this"
  }
};
```

But such code is unreliable. If we decide to copy `user` to another variable, e.g. `admin = user` and overwrite `user` with something else, then it will access the wrong object.

```javascript
let user = {
  name: "Igor",
  age: 23,

  sayHi() {
    alert(user.name); // will show an error
  }
  
};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
```
If we used `this.name` instead of `user.name`, then the code would work.

### "this" is not bound

In JS, keyword `this` behaves differently compared to other programming languages. It can be used in any function, even if it's not a method of an object.

```javascript
function sayHi() {
  alert(this.name);
}
```

The value of `this` is evaluated during the run-time, depending on the context.
Here the same function is assigned to two different objects and has different `this` in the calls:

```javascript
let user = { name: "Igor" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // Igor  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
```
### Arrow Functions have no "this"

Arrow functions are special: they don't have their "own" `this`. If we reference `this` from an arrow function, it's taken from the outer "normal" function that contains it.

```javascript
let user = {
  firstName: "Igor",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Igor
```

This feature is useful when we actually do not want to have a separate `this`, but rather to take it from the outer context.
