/*
 * Numbers
 *
 * there is two type of numbers:
 *
 *   regular numbers in js are stored in 64-bit format IEEE-754, also known as "double precision floating point numbers"
 *
 *   BigInt numbers represent integers of arbitrary length.
 */

// some ways to write a number 
{
  let billion = 1000000000;

  // we can use under score as a separator:
  billion = 1_000_000_000;

  // we can also make it shorter
  billion = 1e9;
  // the number after e9 -> 10**9

  console.log(billion);


  // e accepte nigative also
  let mcs = 1e-6; // five zeroes to the left from 1

  console.log(mcs);
}

// hex, bin and octal Numbers 

{
  let hex, bin, octal;
  // hex 
  {
    hex = 0xff; // 255
    console.log(hex);
    hex = 0xFF; // 255 (case doesn't matter);
    console.log(hex);
  }
  // bin 
  {
    bin = 0b11111111; // 255 
    console.log(bin);
  }
  // octal
  {
    octal = 0o377;
    console.log(octal);
  }

  console.log(hex === bin && hex === octal && bin === octal);

}

// toString(base)

{
  let num = 255;

  // the base can vary from 2 to 36. By default it's 10.

  console.log(num.toString(2));
  console.log(num.toString(8));
  console.log(num.toString(10));
  console.log(num.toString(16));

  // in the base 32 digit can be 0 ... 9 or A ... Z.

  console.log(123..toString(32));

  // to call a number method directly on a number we use two dot
}

// rounding 
{
  // Math.floor(x) round a number to it lower intger 
  console.log(Math.floor(3.5));

  // Math.ceil(x) round a number to it greater intger 
  console.log(Math.ceil(3.5));

  // Math.round(x) round a number to it nearest intger 
  console.log(Math.round(3.6));
  console.log(Math.round(3.4));

  // Math.trunc(x) remove decimal point (not sup by IE) 
  console.log(Math.trunc(3.6));

  // toFixed(x) round the number to x digit after decimal point
  console.log(3.654321.toFixed(3));

  // toFixed give a String not like others
}

// imprecise calculations 

{
  console.log(1e500); // infinity
  console.log(0.1 + 0.2 === 0.3); // false 
  console.log(0.1.toFixed(20) == 0.1); // false 

  /*
   * this is happen in other langauge not only js
   * because are based on the same numeric format
   * (the way that store float in memory)
  */
}


// isFinite and isNaN 
{
  /*
   * infinity and -infinity is a special numeric value 
   * that is greater than or less than anything 
   * NaN is not a number represent and error 
   */

  console.log(isNaN(NaN)); // true 
  console.log(isNaN("hello")); // true
  console.log(isNaN(true)); // false


  console.log(isFinite(1)); // true 
  console.log(isFinite("hello")); // flase it is nan  
  console.log(isFinite(Infinity)); // false 
}

// parseint and parse Float 
{
  /*
   * numeric conversion using a plus + or
   * Number() is strict. if a value is not
   * exactly a number, it fails. (+"100px" => NaN)
   */


  /*
   * parseInt() and parseFloat() read a number
   * from a string until they can't 
   */


  console.log(parseInt('100px')); // 100
  console.log(parseFloat('12.5em')); // 12.5

  console.log(parseInt('12.3')); // 12, only the integer part is returned
  console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading

  /*
   * There are situations when parseInt
   * / parseFloat will return NaN.It happens
   * when no digits could be read 
   */

  console.log(parseInt('a123')); // NaN, the first symbol stops the process

  /*
   * parseInt() has a second number radix
   * represent the base of the input string 
   */

  console.log(parseInt('ff', 16)); // 255
}

/*
 * there is other function to use with numbers 
 */

console.log(Math.random());
console.log(Math.max(3, 4, 5, 6, 9, 7, 8));
console.log(Math.pow(3, 3));



