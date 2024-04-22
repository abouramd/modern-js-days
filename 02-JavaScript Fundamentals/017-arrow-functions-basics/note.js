// arrow functions very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// let func = (arg1, arg2, ..., argN) => expression;
// Example
{
  let sum = (a, b) => a + b;
  /* This arrow function is a shorter form of:
  
  let sum = function(a, b) {
    return a + b;
  };
  */

  alert(sum(1, 2)); // 3
}
// Multiline arrow functions
{
  let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };

  alert(sum(1, 2)); // 3
}
