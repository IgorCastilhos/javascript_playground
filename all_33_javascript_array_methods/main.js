const a = new ArrayBuffer(6);

console.log(a);

const a8 = new Uint8Array(a);

a8[0] = 45;

console.log(a);

a8[2] = 45;

console.log(a);

const a16 = new Uint16Array(a);

console.log(a);

a16[2] = 0x4545;

console.log(a);

// What are arrays? Contiguous memory allocation for elements of the same type
// ArrayBuffer is a way to allocate memory for elements of the same type

// Access: O(1) -> it takes the width of the type, multiplies it by the offset
// and puts it in the memory address, go in and grab that
// a + width * offset

// Insertion: O(1) -> It doesn't necessarily insert it, it overwrites it. So it's just gonna set that value.
// You do not get to grow the array, you have to allocate a new array and copy the old one over.
// You go to a memory address (a). You add in the width of the type which is usually specified in bytes,
// multiply it by the index, and then you can get to that memory address and set the value.
// a + width * offset

// Deletion: O(1) -> It's the same as insertion, you just set the value to 0 or null or whatever you want.
// It works the same way, get to the offset and set the value to 0.
// a + width * offset