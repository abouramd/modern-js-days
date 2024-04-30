{
  /*
   * To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).
   *  
   * When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
   * Onward, for..of works only with that returned object.
   * When for..of wants the next value, it calls next() on that object.
   * The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.
   * Here’s the full implementation for range with remarks:
   */

  let range = {
    from: 1,
    to: 5,

    // 1. call to for..of initially calls this
    [Symbol.iterator]() {

      // ...it returns the iterator object:
      // 2. Onward, for..of works only with the iterator object below, asking it for next values
      return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next() {
          // 4. it should return the value as an object {done:.., value :...}
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    },
  };

  // now it works!
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }

}

// string is iterable 
{
  let str = '𝒳😂';
  for (let char of str) {
    console.log(char); // 𝒳, and then 😂
  }
}

// calling an iterator explicity 
{
  let str = "Hello";

  // does the same as
  // for (let char of str) console.log(char);

  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
  }
}

// array-like should have a Symbol.iterator 
{
  let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
  };

  // Error (no Symbol.iterator)
  // for (let item of arrayLike) { }

  arrayLike[Symbol.iterator] = function() {
    return {
      array: this,
      current: 0,

      next() {
        if (this.current < this.array.length)
          return { done: false, value: this.array[this.current++] };
        else
          return { done: true };
      }
    };
  }
  for (let item of arrayLike) { console.log(item); }
}

// Array.from 
{
  /* 
   * There’s a universal method Array.from that
   * takes an iterable or array-like value and
   * makes a “real” Array from it. Then we can
   * call array methods on it.
   */

  let arrayLike = {
    0: "hello",
    1: "abdelhay",
    2: "abde",
    3: "lhay",
    length: 4,
  };

  let arr = Array.from(arrayLike);
  console.log(arr);
  console.log(arr.pop());

  /*
   * The full syntax for Array.from also allows
   * us to provide an optional “mapping” function:
   * Array.from(obj[, mapFn, thisArg])
   * 
   * The optional second argument mapFn can be a
   * function that will be applied to each element
   * before adding it to the array, and thisArg
   * allows us to set this for it.
   */

  arr = Array.from(arrayLike, e => "|| " + e + " ||");

  console.log(arr);

  // Here we use Array.from to turn a string into an array of characters:

  let str = '𝒳😂';

  // splits str into array of characters
  let chars = Array.from(str);

  console.log(chars[0]); // 𝒳
  console.log(chars[1]); // 😂
  console.log(chars.length); // 2

}












