
'use strict'

/*
 * Symbol type
 * By specification, only two primitive
 * types may serve as object property keys:
 *  
 *   string type, or
 *   symbol type.
 *  
 * Otherwise, if one uses another type,
 * such as number, it’s autoconverted to string.
 * So that obj[1] is the same as obj["1"],
 * and obj[true] is the same as obj["true"].
 */

{
  /*
   * A “symbol” represents a unique identifier, 
   * A value of it can be created using Symbol()
   */


  let sym = Symbol();

  // id is a symbol with the description "id"
  let id = Symbol("id");

  // Symbols are unique. Even with the same description

  let id2 = Symbol("id");

  console.log(id == id2);
}


{
  // Symbols don’t auto-convert to a string

  let id = Symbol("id");

  // alert(id); // TypeError: Cannot convert a Symbol value to a string

  console.log(id.toString()); // Symbol(id), now it works

  console.log(id.description); // id
}

/*
 * Symbols allow us to create “hidden” properties of an object,
 * that no other part of code can accidentally access or overwrite.
 */
{
  {
    let user = { // belongs to another code
      name: "John"
    };

    let id = Symbol("id");

    user[id] = 1;

    console.log(user[id]); // we can access the data using the symbol as the key
    console.log(user);
  }


  /*
   *
   * What’s the benefit of using Symbol("id") over a string "id"?
   * 
   * As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.
   * 
   * Also, imagine that another script wants to have its own identifier inside user, for its own purposes.
  */

  {
    let user = {};
    let id1 = Symbol("id");
    let id2 = Symbol("id");

    user[id1] = "first value";
    user[id2] = "second value";

    console.log(user[id1], user[id2]);
  }

}


// symbol in an object literal

{

  let id = Symbol("id");

  let user = {
    name: "John",
    [id]: 123 // not "id": 123
  };

  /*
   * That’s because we need the
   * value from the variable
   * id as the key, not the string “id”.
   */
}


// Symbols are skipped by for…in and Object.keys() function  

{
  let id = Symbol("id");
  let user = {
    name: "John",
    age: 30,
    [id]: 123
  };

  for (let key in user) console.log(key); // name, age (no symbols)

  // the direct access by the symbol works
  console.log("Direct: " + user[id]); // Direct: 123
}

// Object.assign copies both string and symbol properties 

{
  let id = Symbol("id");
  let user = {
    [id]: 123
  };

  let clone = Object.assign({}, user);

  console.log(clone[id]); // 123
}

// global symbols 

{
  {
    // read from the global registry
    let id = Symbol.for("id"); // if the symbol did not exist, it is created

    // read it again (maybe from another part of the code)
    let idAgain = Symbol.for("id");

    // the same symbol
    console.log(id === idAgain); // true
  }
  /*
   * To do the opposite – return a name
   * by global symbol – we can use:
   * Symbol.keyFor(sym)
   */
  {
    // get symbol by name
    let sym = Symbol.for("name");
    let sym2 = Symbol.for("id");

    let localSymbol = Symbol("name"); // local symbol

    // get name by symbol
    console.log(Symbol.keyFor(sym)); // name
    console.log(Symbol.keyFor(sym2)); // id

    console.log(Symbol.keyFor(localSymbol)); // undefined, not global
  }
}

/*
 * Technically, symbols are not 100% hidden.
 * There is a built-in method 
 * Object.getOwnPropertySymbols(obj) that allows
 * us to get all symbols. Also there is a method
 * named Reflect.ownKeys(obj) that returns all
 * keys of an object including symbolic ones.
 * But most libraries, built-in functions and
 * syntax constructs don’t use these methods.
 */



