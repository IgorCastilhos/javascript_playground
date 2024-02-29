const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, output: process.stdout
});

// rl.question("What's your browser?\n", (browser) => {
//   if (browser === 'Edge') {
//     console.log("You've got the Edge!");
//   } else if (browser === 'Chrome'
//       || browser === 'Firefox'
//       || browser === 'Safari'
//       || browser === 'Opera') {
//     console.log('Okay we support these browsers too');
//   } else {
//     console.log('We hope that this page looks ok!');
//   }
//   rl.close();
// });

// Rewrite the code below using a single switch statement
let a = 0;
rl.question("What's the value of a?\n", (input) => {
      a = Number(input);
      switch (a) {
        case 0:
          console.log(0);
          break;

        case 1:
          console.log(1);
          break;

        case 2:
        case 3:
          console.log('2, 3');
          break;
      }
      rl.close();
    }
);

