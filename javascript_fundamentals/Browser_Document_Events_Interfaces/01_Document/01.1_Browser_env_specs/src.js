// A host env provides its own objects and functions in addition to the language core.
// Web browsers give a means to control web pages. Node.js provides server-side features.

// There's a root object called window. It has two roles:
// 1. It is a global object for JavaScript code.
// 2. It represents the browser window and provides methods to control it.

function sayHi() {
  alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();

// to show the browser windows height:
alert(window.innerHeight);

// DOM
// Represents all page content as objects that can be modified.
// The document object is the main entry point to the page.

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);

// The DOM is not only for browsers
// There are non-browser environments that also support the DOM, like Node.js.
// Server-side scripts that download HTML pages and process them can also use the DOM.
// They may support only a part of the specification though.

// CSSOM for styling
// It is used together with the DOM when we modify style rules for the doc. That explains
// how CSS rules and stylesheets are represente as objects, and how to read and write them.
// In practice, the CSSOM is rarely required,

// BOM (Browser Object Model)
// The BOM is a set of objects that provide additional capabilities to the browser.
// The navigator object provides background info about the browser and the OS.
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org";
}
