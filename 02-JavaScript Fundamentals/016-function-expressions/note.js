// The syntax that we used before is called a Function Declaration.
{
  function sayHi() {
    alert("Hello");
  }
}

// There is another syntax for creating a function that is called a Function Expression.
{
  let sayHi = function() {
    alert("Hello");
  }

  sayHi();
}

// function is a value we can print it like this

{
  function sayHi() {
    alert("Hello");
  }

  alert(sayHi);
}

// we can copy a function 
{
  function sayHi() {   // (1) create
    alert("Hello");
  }

  let func = sayHi;    // (2) copy

  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)
}

// call back function we can pass function throw param

// function work in there scope only


