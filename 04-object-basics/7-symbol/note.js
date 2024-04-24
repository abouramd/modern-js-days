
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
    let id = Symbol("id");

    user[id] = "Their id value";
  }

}
