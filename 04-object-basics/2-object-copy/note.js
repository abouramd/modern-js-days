/*
 * One of the fundamental differences of objects
 * versus primitives is that objects are stored
 * and copied “by reference”, whereas primitive values:
 * strings, numbers, booleans, etc – are always copied
 * “as a whole value”.
 */

let message = "Hello!";
let phrase = message;

/*
 * As a result we have two independent variables,
 * each one storing the string "Hello!".
 */



/*
 * A variable assigned to an object stores not
 * the object itself, but its “address in memory” – in
 * other words “a reference” to it.
 */

let user = {
  name: "John"
};

/*
 * When an object variable is copied, the reference is copied,
 * but the object itself is not duplicated.
 *
 */

let admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

// Comparison by reference

{
  // Two objects are equal only if they are the same object(the same address).
  let a = {};
  let b = a; // copy the reference
  let c = {};// independent object

  console.log(a == b); // true, both variables reference the same object
  console.log(a === b); // true
  console.log(a == c); // false
}

/*
 * note:
 * in a const object you can change the value
 * of it properties but you can change the reference
 * of the object.
 */

// Cloning and merging, Object.assign.

{
  // copy an object in the hard way 
  {
    let user = {
      name: "John",
      age: 30
    };

    let clone = {}; // the new empty object

    // let's copy all user properties into it
    for (let key in user) {
      clone[key] = user[key];
    }

    // now clone is a fully independent object with the same content
    clone.name = "Pete"; // changed the data in it

    console.log(user.name); // still John in the original object
  }
  // We can also use the method Object.assign(Object.assign(dest, ...sources)).
  {
    let user = { name: "John" };

    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };

    // copies all properties from permissions1 and permissions2 into user
    Object.assign(user, permissions1, permissions2);

    // now user = { name: "John", canView: true, canEdit: true }
    alert(user.name); // John
    alert(user.canView); // true
    alert(user.canEdit); // true
  }
  // Object.assign accepte multi args that help us merging

  // If the copied property name already exists, it gets overwritten:
  {
    let user = { name: "John" };

    Object.assign(user, { name: "Pete" });

    alert(user.name); // now user = { name: "Pete" }
  }
  // Object.assign can use to clone an obj
  {
    let user = {
      name: "John",
      age: 30
    };

    let clone = Object.assign({}, user);

    alert(clone.name); // John
    alert(clone.age); // 30
  }
}

// Nested cloning
{
  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

  let clone = Object.assign({}, user);

  alert(user.sizes === clone.sizes); // true, same object

  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 60, get the result from the other one
  // in this case the size property is shared
  // bettween the two objects
}

// structuredClone
{
  {
    // The call structuredClone(object) clones the 
    // object with all nested properties.
    let user = {
      name: "John",
      sizes: {
        height: 182,
        width: 50
      }
    };

    let clone = structuredClone(user);

    alert(user.sizes === clone.sizes); // false, different objects

    // user and clone are totally unrelated now
    user.sizes.width = 60;    // change a property from one place
    alert(clone.sizes.width); // 50, not related
  }
  // structuredClone fails i cases like that 
  {
    let user = {};
    // let's create a circular reference:
    // user.me references the user itself
    user.me = user;

    let clone = structuredClone(user);
    alert(clone.me === clone); // true
  }
  // error
  structuredClone({
    // f: function() { }, // Function properties aren’t supported.
  });
}






