let x = 1;

x = -x;
console.log(x); // -1, unary negation was applied, it has a single operand.

x = 1;
let y = 3;

console.log(y - x); // 2, binary minus subtracts values, it has two operands


console.log(3 % 2) // Remainder

console.log(3 ** 2) // Exponentiation


// Remainder

console.log(5 % 2); // 1, the remainder of 5 divided by 2
console.log(8 % 3); // 2, the remainder of 8 divided by 3
console.log(8 % 4); // 0, the remainder of 8 divided by 4


// Exponentiation

console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16


// string concatenation 
console.log("hello" + " " + "abdelhay")
console.log('1' + 2); // "12" if any of the operands is a string
console.log(2 + '1'); // "21" if any of the operands is a string
console.log(2 + 2 + '1'); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"

// The binary + is the only operator that supports strings in such a way.

console.log(6 - '2'); // 4, converts '2' to a number
console.log('6' / '2'); // 3, converts both operands to numbers

// Converts non-numbers
alert(+true); // 1
alert(+"");   // 0

let a, b, c;

a = b = c = 2 + 2; // Chained assignments 

// modify in place

let n = 2;
n = n + 5;
n = n * 2;

// you can also do it like that 

n = 0;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
n *= 3 + 5; // right part evaluated first, same as n *= 8

// Increment and decrement

let counter = 0;
counter++;// post Increment
counter--;// post decrement
++counter;// pre Increment
--counter;// pre decrement
// pre Increment or decrement change the value and return the new one
// post Increment or decrement return the old value after that change it to the new one

// Bitwise operators
//  AND( & ) Sets each bit to 1 if both bits are 1
//  OR( | ) Sets each bit to 1 if one of two bits is 1
//  XOR( ^ ) Sets each bit to 1 if only one of two bits is 1
//  NOT( ~ ) Inverts all the bits
//  LEFT SHIFT( << ) Shifts left by pushing zeros in from the right and let the leftmost bits fall off
//  RIGHT SHIFT( >> ) Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
//  ZERO - FILL RIGHT SHIFT( >>> ) Shifts right by pushing zeros in from the left, and let the rightmost bits fall off




// Comma
// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

let comma = (1 + 2, 3 + 4);

console.log(comma); // 7 (the result of 3 + 4)







