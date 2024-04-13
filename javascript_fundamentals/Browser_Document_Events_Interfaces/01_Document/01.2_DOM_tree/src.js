// According to the DOM, every HTML tag is an object.
// Nested tags are children of the enclosing tag.
// The text inside a tag is an object as well.
document.body.style.background = 'blue';
setTimeout(() => document.body.style.background = '', 2000);

// An example of the DOM
// -> index.html file

