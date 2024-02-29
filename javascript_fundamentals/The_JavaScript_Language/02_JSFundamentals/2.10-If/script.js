// The if statement
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

// The else clause
let year2 = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year2 == 2015) {
  alert( 'You are right!' );
} else {
  alert( 'How can you be so wrong?' );
}
// The else if clause
let year3 = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year3 < 2015) {
  alert( 'Too early...' );
} else if (year3 > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}


// Conditional operator '?'
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// Non-traditional use of '?'
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
    alert('Right!') : alert('Wrong.');

