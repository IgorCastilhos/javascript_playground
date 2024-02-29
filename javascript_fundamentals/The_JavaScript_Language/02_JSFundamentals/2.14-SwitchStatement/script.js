// switch
let a = 2 + 2;
switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too large');
    break;
  default:
    console.log("I don't know such values");
}

// grouping of cases

let b = 3;
switch (b) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;
    
  default:
    console.log('The result is strange. Really.');
}
