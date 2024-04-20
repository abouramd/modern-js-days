let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015)
  alert('You are right!'); // execute more than one statement

if (year == 2015) { // execute more than one statement, we wrap our code block inside curly braces
  alert("That's correct!");
  alert("You're so smart!");
}

// else block It executes when the condition is falsy.

if (year == 2015) {
  alert('You guessed it right!');
} else {
  alert('How can you be so wrong?'); // any value except 2015
}

//Conditional operator
let age = prompt('How old are you?', '');

// ternary operator
let accessAllowed = (age > 18) ? true : false;
// Multiple ‘?’
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
      'What an unusual age!';

alert(accessAllowed);
alert(message);


// this will call one of the functions
(18 <= age) ? alert('Right!') : alert('Wrong.');




