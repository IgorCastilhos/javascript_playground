// function makeUser() {
//   return {
//     name: "Igor", ref() {
//       return this;
//     }
//   };
// }
//
// let user = makeUser();
//
// console.log(user.ref().name); // What's the result?
//

// Calculator

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },


  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
