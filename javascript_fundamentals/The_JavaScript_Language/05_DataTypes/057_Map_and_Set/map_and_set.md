### Map

- **Overview**: Map is a key-value collection allowing any type of keys, differing from objects that convert keys to strings. It provides efficient key lookup and maintains the insertion order.

  ```javascript
  let map = new Map();
  map.set('1', 'str1');
  map.set(1, 'num1');
  map.set(true, 'bool1');
  alert(map.get(1)); // 'num1'
  alert(map.get('1')); // 'str1'
  alert(map.size); // 3
  ```

- **Key Features**: Supports keys of any type, preserves insertion order, and provides various methods like `set`, `get`, `has`, `delete`, `clear`, and `size` for manipulation.

- **Usage**: Preferred over objects when key integrity is important or when using keys other than strings and symbols. It allows chaining with `map.set()` calls and supports direct iteration over keys, values, or entries.

  ```javascript
  let visitsCountMap = new Map();
  let john = { name: "John" };
  visitsCountMap.set(john, 123);
  alert(visitsCountMap.get(john)); // 123
  ```

- **Key Comparison**: Uses SameValueZero algorithm, treating NaN as equal to NaN, unlike strict equality `===`.

- **Conversion to and from Object**: Utilizes `Object.entries()` to create a Map from an object and `Object.fromEntries(map)` to convert a Map back to an object.

  ```javascript
  let obj = { name: "John", age: 30 };
  let map = new Map(Object.entries(obj));
  alert(map.get('name')); // John
  
  let prices = Object.fromEntries(map); // Convert Map to object
  alert(prices.name); // John
  ```

### Set

- **Overview**: Set is a collection of unique values without keys. It automatically removes duplicates, making it ideal for storing a collection of unique items.

  ```javascript
  let set = new Set(["oranges", "apples", "bananas"]);
  set.add("oranges"); // No effect, "oranges" already in the set
  alert(set.size); // 3
  ```

- **Key Features**: Supports operations like `add`, `delete`, `has`, `clear`, and `size`. Ensures that each value only occurs once in the collection.

- **Usage**: Useful when you need to maintain a collection of unique items and frequently check for the presence of items without worrying about duplicates.

  ```javascript
  let set = new Set();
  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };
  set.add(john).add(pete).add(mary).add(john);
  alert(set.size); // 3
  ```

- **Iteration**: Supports iteration using `for..of` or `forEach`, and provides methods like `keys`, `values`, and `entries` for compatibility with Map.

  ```javascript
  for (let value of set) alert(value);
  set.forEach((value) => {
    alert(value);
  });
  ```

- **Key Takeaway**: Sets are optimized for uniqueness checks and are more efficient than using arrays for the same purpose, especially when dealing with large data sets.
