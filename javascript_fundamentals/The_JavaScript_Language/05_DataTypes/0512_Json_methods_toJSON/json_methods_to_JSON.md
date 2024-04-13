### JSON Methods and `toJSON`

#### Introduction to JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy to read and write for humans and easy to parse and generate for machines. It is based on a subset of JavaScript but is language-independent. JSON is commonly used for sending data from a server to a web page.

#### JSON.stringify

- **Purpose**: Converts JavaScript objects into JSON strings.
- **Usage**: `let json = JSON.stringify(value[, replacer, space])`
- **Key Points**:
    - Can be applied to objects, arrays, and primitives.
    - Function properties, symbolic keys, and properties that store `undefined` are skipped.
    - Supports nested objects.
    - Circular references are not allowed.

  ```javascript
  let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };

  let json = JSON.stringify(student);
  ```

#### Replacer Function

- **Purpose**: Allows filtering out properties that you don't want to be stringified.
- **Usage**: Can be an array of properties to keep or a function for more fine-grained control.

  ```javascript
  JSON.stringify(meetup, ['title', 'participants']);
  // Using a function
  JSON.stringify(meetup, function(key, value) {
    return key == 'occupiedBy' ? undefined : value;
  });
  ```

#### Formatting with Space

- **Purpose**: Makes the output of `JSON.stringify` prettier, adding indentation and line breaks.
- **Usage**: The `space` parameter specifies the number of spaces to indent nested structures.

  ```javascript
  JSON.stringify(value, replacer, 2);
  ```

#### Custom `toJSON`

- **Purpose**: Customizes the JSON stringification behavior.
- **Usage**: Objects can define their own `toJSON` method for custom serialization.

  ```javascript
  let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  ```

#### JSON.parse

- **Purpose**: Parses a JSON string, constructing the JavaScript value or object described by the string.
- **Usage**: `let value = JSON.parse(str[, reviver])`
- **Key Points**:
    - Can transform values during parsing using a `reviver` function.

  ```javascript
  let userData = '{"name": "John", "age": 35}';
  let user = JSON.parse(userData);
  ```

- **Reviver Function**: Allows for post-processing of the key-value pairs.

  ```javascript
  JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
  ```

#### Summary

JSON is a crucial part of web development for serializing and transmitting structured data over network connections. It supports data structures like objects and arrays, along with primitives such as strings, numbers, and booleans. The `JSON.stringify` method converts JavaScript objects into JSON strings, and `JSON.parse` does the reverse, enabling the use of JSON data in JavaScript. Custom serialization can be achieved with the `toJSON` method, and specific parsing needs can be addressed with the reviver function in `JSON.parse`.
