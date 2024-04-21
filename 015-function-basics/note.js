
let globalVar; // this is a global variable 
let globalVar2; // this is a global variable 

function showMessage(param = "this is a default value for the variable") { // we can pass a data to a function
  let globalVar2;
  globalVar = "this is a global var"; // changed the outer variable
  globalVar2 = "this is a local var"; // changed the local var variable not the global
  let localVar; // this is a local variable work only in this scop
  console.log("hi from the function", globalVar); // the function can access to the global variables
  return localVar; // return a value back into the calling 
}

// if no return in a function it return undefined

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}




