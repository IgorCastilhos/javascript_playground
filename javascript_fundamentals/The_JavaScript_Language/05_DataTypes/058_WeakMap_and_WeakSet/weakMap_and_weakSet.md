### WeakMap

- **Overview**: `WeakMap` is a variant of `Map` that allows only objects as keys and does not prevent garbage collection of key objects. It's useful for privately associating data with an object without interfering with garbage collection.

  ```javascript
  let weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, "ok");
  // Using non-object keys throws an error
  // weakMap.set("test", "Whoops"); // Error
  ```

- **Key Characteristics**:
    - Keys must be objects.
    - Does not support iteration methods (`keys()`, `values()`, `entries()`).
    - Automatic garbage collection of keys leads to potential automatic cleanup of associated values.

  ```javascript
  let john = { name: "John" };
  let weakMap = new WeakMap();
  weakMap.set(john, "...");
  john = null; // `john` object can be garbage collected
  ```

- **Use Cases**: Primarily used for storing additional data related to objects without affecting their lifecycle. Ideal for caching or tracking object states without memory leaks.

  ```javascript
  let visitsCountMap = new WeakMap();
  function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
  }
  ```

### WeakSet

- **Overview**: `WeakSet` is a collection of objects, similar to `Set`, but with weakly held references. It does not prevent the objects it contains from being garbage collected. Like `WeakMap`, it does not support iteration or the `.size` property.

  ```javascript
  let visitedSet = new WeakSet();
  let john = { name: "John" };
  visitedSet.add(john);
  john = null; // `john` can be garbage collected
  ```

- **Key Characteristics**:
    - Only objects can be added (no primitive values).
    - Supports `.add()`, `.has()`, and `.delete()` methods but not `.size` or iteration methods.
    - Automatically cleans up once objects are no longer reachable.

  ```javascript
  let visitedSet = new WeakSet();
  let john = { name: "John" };
  visitedSet.add(john);
  alert(visitedSet.has(john)); // true
  john = null; // After `john` becomes unreachable, it's removed from the set
  ```

- **Use Cases**: Useful for keeping track of objects without affecting their lifecycle, similar to `WeakMap`. Commonly used for marking objects for various conditions or states, such as tracking which objects have been processed in a particular workflow.

  ```javascript
  let john = { name: "John" };
  let visitedSet = new WeakSet([john]);
  // Now we can use `john` object in any operations
  // Once we are done and `john` is no longer reachable, it will be removed from `visitedSet` automatically
  ```

### Key Takeaways for Both:

- `WeakMap` and `WeakSet` are specialized collections that hold "weak" references to object keys/values, allowing for better memory management and automatic garbage collection.
- These structures do not support enumeration, which means there's no direct method to get all the keys or values stored in them.
- They are particularly useful when associating data with objects in a way that does not prevent those objects from being garbage collected, making them suitable for caches, tracking, and managing metadata for objects managed elsewhere.
