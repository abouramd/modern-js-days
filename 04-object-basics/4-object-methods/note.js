// Actions are represented in JavaScript by functions in properties.

{
  let user = {
    name: "John",
    age: 30
  };


  user.sayHi = function() {
    console.log("Hello!");
  };

  user.sayHi(); // Hello!

  // we can also do it like this 

  // first, declare
  function sayHi() {
    console.log("Hello!");
  }

  // then add as a method
  user.sayHi = sayHi;

  user.sayHi();

}

// this is a shorthand


{
  // these objects do the same
  {
    user = {
      sayHi: function() {
        console.log("Hello");
      }
    };
  }
  {
    // method shorthand looks better, right?
    user = {
      sayHi() { // same as "sayHi: function(){...}"
        console.log("Hello");
      }
    };
  }
}

// “this” in methods

{
  // To access the object, a method can use the this keyword.
  {
    let user = {
      name: "John",
      age: 30,

      sayHi() {
        // "this" is the "current object"
        console.log(this.name);
      }

    };

    user.sayHi(); // John
  }
  // we can access to the object in an other way 
  {
    let user = {
      name: "John",
      age: 30,

      sayHi() {
        console.log(user.name); // "user" instead of "this"
      }

    };
  }
  // it a bad practis to access the object using the object name nto this 
  {
    let user = {
      name: "John",
      age: 30,

      sayHi() {
        console.log(user.name); // leads to an error
      },
      sayHello() {
        console.log(this.name); // this is the good way.
      }

    };


    let admin = user;
    user = null; // overwrite to make things obvious

    // admin.sayHi(); // TypeError: Cannot read property 'name' of null
    // in this case the user is content null there is no function in it.
    admin.sayHello();// this is will work normal
  }
}

// Calling without an object: this == undefined is true














