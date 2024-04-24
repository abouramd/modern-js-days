/*
  * Constructor function
  * Constructor functions technically are regular functions. There are two conventions though:
  * 
  *   They are named with capital letter first.
  *   They should be executed only with "new" operator.
  * 
  */

{

  function User(name) { // Constructor function declartion
    this.name = name;
    this.isAdmin = false;
  }

  let user = new User("Jack");

  console.log(user.name); // Jack
  console.log(user.isAdmin); // false

}

/*
 * When a function is executed with new, it does the following steps:
 *
 * A new empty object is created and assigned to this.
 * The function body executes. Usually it modifies this, adds new properties to it.
 * The value of this is returned.
 */


{
  // when new used this is wath happen
  function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
  }

  // it will give the same resault as  
  let user = {
    name: "Jack",
    isAdmin: false
  };

  let uff = new User("Jack");

  console.log(user);
  console.log(uff);
}

/*
 * Constructor mode test 
 *
 * we can check whether it was called with new
 * or without it, using a special new.target property.
 */
{
  {
    function User() {
      console.log(new.target);
    }

    // without "new":
    User(); // undefined

    // with "new":
    new User(); // function User { ... }
  }

  /*
   * this is make us know whether it was called with new,
   * “in constructor mode”, or without it, “in regular mode”.
   */
  {
    function User(name) {
      if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
      }

      this.name = name;
    }

    let john = User("John"); // redirects call to new User
    console.log(john.name); // John
  }
}

/*
 * return from a Constructor
 *
 * Usually, constructors do not have a return statement.
 * Their task is to write all necessary stuff into this,
 * and it automatically becomes the result.
 * 
 * But if there is a return statement, then the rule is simple:
 *  - If return is called with an object, then the object is returned instead of this.
 *  - If return is called with a primitive, it’s ignored.
 *  - In other words, return with an object returns that object, in all other cases this is returned.
*/

{
  {
    function BigUser() {

      this.name = "John";

      return { name: "Godzilla" };  // <-- returns this object
    }

    console.log(new BigUser().name);  // Godzilla, got that object
  }
  {
    function noneUser() {

      this.name = "John";

      return "none"; // <-- returns this
    }

    console.log(new noneUser().name);  // John
  }
  {
    function SmallUser() {

      this.name = "John";

      return; // <-- returns this
    }

    console.log(new SmallUser().name);  // John
  }
}


// Omitting parentheses

{
  {
    let user = new User; // <-- no parentheses
  }
  // same as
  {
    let user = new User();
  }
}

// Methods in constructor 
{
  function User(name) {
    this.name = name;

    this.sayHi = function() {
      alert("My name is: " + this.name);
    };
  }

  let john = new User("John");

  john.sayHi(); // My name is: John
}




