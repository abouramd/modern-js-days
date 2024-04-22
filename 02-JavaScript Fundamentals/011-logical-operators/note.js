// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

'use strict'

// OR || one is true is true else false
console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false

true || console.log("not printed");
false || console.log("printed");

// AND &&  true if both operands are truthy and false otherwise

console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false

let x = 1;

(x > 0) && console.log('Greater than zero!');

// ! NOT Returns the inverse value
let result = !true; // result is false

// double NOT !! is sometimes used for converting a value to boolean type
result = !!true; // result is true




