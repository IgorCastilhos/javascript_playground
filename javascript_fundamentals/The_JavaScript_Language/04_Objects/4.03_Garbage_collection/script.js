// Reachability
// The main concept of memory management is reachability.
// Reachable values are those that are accessible or usable
// somehow. They are guaranteed to be stored in memory.

// The background process in JavaScript engine is called garbage collector.
// It monitors all objects and removes those that have become unreachable.

// user has a reference to the object
let user = {
  name: "John"
};

// The global var 'user' references the object {name: "John"}.
// The 'name' property of John stores a primitive, so it's painted inside
// the object.

// If the value of user is overwritten, the reference is lost:
user = null;

// Now John is unreachable and will be removed from the memory.

// Two References
// If there are two objects referencing each other, like in the example below:
let user2 = {
  name: "Doe"
};

let admin = user2;

// Now if we do the same:
user2 = null;

// Then the object is still reachable via 'admin' global variable,
// so it's not removed from the memory. If we overwrite admin too, then it
// becomes unreachable and will be removed.

// Interlinked objects
// There are more complex patterns, when objects are interlinked.
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  };
}

let family = marry({name: "John"}, {name: "Ann"});

// Function marry "marries" two objects by giving them references to each other
// and returns a new object that contains references to them both.

console.log(family);

// Now let's remove two references
delete family.father;
delete family.mother.husband;

// John is now unreachable and will be removed from the memory.

// Unreachable island
// It is possible that the whole island of interlinked objects becomes
// unreachable and will be removed from the memory.
family = null;

// Internal algorithms
// The basic garbage collection algorithm is called "mark-and-sweep".
// The following steps are taken:
// 1. The garbage collector takes roots and "marks" (remembers) them.
// 2. Then it visits and "marks" all references from them.
// 3. Then it visits and "marks" all references from those references.
// All visited objects are remembered, so as not to visit the same object twice.
// 4. ...And so on until every reachable (from the roots) references are visited
// All objects except marked ones are removed.


// Some of the optimizations:
// 1. Generational collection: objects are split into two sets: "new" and "old".
// In typical code, many objects have a short life span: they appear
// , do their job and die fast, so it makes sense to track the new objects
// and clear the memory from them if that's the case. Old objects are examined
// less often.
// 2. Incremental collection: if there are many objects, and we try to walk
// and mark the whole object at once, it may take some time and introduce
// visible delays in the execution. So the engine tries to split the whole
// set of existing objects into multiple parts. And then clear these parts one after
// another. There are many small garbage collections instead of one big one.
// That requires some extra bookkeeping between them to track changes, but
// we get many tiny delays instead of a big one.
// 3. Idle-time collection: the garbage collector tries to run only while the CPU
// is idle, to reduce the possible impact on the running code.
