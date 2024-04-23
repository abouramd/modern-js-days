/*
 * we can create object use two syntaxes:
 */

{
  {
    let user = new Object(); // "object constructor" syntax
  }
  {
    let user = {};  // "object literal" syntax
  }
}

// Literals and properties 

{
  let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
  console.log(user.name);
  console.log(user.age);
  user.isAdmin = true; // add a property 
  console.log(user.isAdmin);
  delete user.age; // remove property
  user["likes birds"] = true; // add a property with space
  delete user["likes birds"]; // remove property

  let key = "hello world";
  user[key] = true; // add a property with space using variables
  // you can't use it lik this user.key
  delete user[key]; // remove property
}

{
  let key = "apple";
  let user = {
    [key]: 5, // the name of the property is taken from the variable key 
    [key + "Hello"]: 7, // // user.appleHello = 5
  };

  console.log(user.appleHello);
  //Reading a non-existing property just returns undefined
  console.log(user.unknowningName);
  // you can use in operator to check that
  console.log("unknowningName" in user); // false not exist 
  console.log(key in user); // true exist

  /*
   * it better to use in oprator
   * there is cases where undefined
   * failes to check lik this
   */
  let obj = {
    test: undefined
  };

  console.log(obj.test); // it's undefined, so - no such property?

  console.log("test" in obj); // true, the property does exist!

  /*
   * In the code above, the property obj.test
   * technically exists. So the in operator works right.
   */
}


// for in
{
  // walk over all keys of an object, there exists a special form of the 

  'use strict';

  let obj = {
    firstName: "abdelhay",
    lastName: "bouramdane",
    age: 21,
    school: 1337,
  }

  for (key in obj) {
    console.log("key:", key);
    console.log("Value:", obj[key]);
  }
}









