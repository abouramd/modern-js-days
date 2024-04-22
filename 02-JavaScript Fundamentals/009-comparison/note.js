// All comparison operators return a boolean value

console.log(2 > 1);  // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)

let result = 5 > 4; // assign the result of the comparison
console.log(result); // true


// String comparison
// JavaScript uses the Unicode order to compare string.

console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true


// type conversions work in the case of comparesion
console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1

// for boolean true is 1, false is 0.
console.log(true == 1); // true
console.log(false == 0); // true


// crazy cases

let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true!

// Strict equality
// A strict equality operator === checks the equality without type conversion.
console.log(0 === false); // false, because the types are different
// There is also a “strict non-equality” operator !==


console.log(null === undefined); // false
console.log(null == undefined); // true
// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN. 

