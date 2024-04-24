/*
 * The optional chaining ?. is a safe way to access nested
 * object properties, even if an intermediate
 * property doesn’t exist.
 *
 * The optional chaining ?. stops the evaluation if
 * the value before ?. is undefined or null and
 * returns undefined.
 * 
 */
{
  {
    let user = {}; // user has no address

    alert(user?.address?.street); // undefined (no error)
  }

  {
    let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element
  }
}

{
  /*
   * Reading the address with user?.address works
   * even if user object doesn’t exist:
   */

  let user = null;

  alert(user?.address); // undefined
  alert(user?.address.street); // undefined
  /*
   * Please note: the ?. syntax makes optional
   * the value before it, but not any further.
   *
   * user = {
   *  address: null,
   * };
   * alert(user?.address.street); // error
   *
   */

}

{
  /*
   * The ?.[] syntax also works, if we’d like
   * to use brackets [] to access properties
   * instead of dot
   */

  let key = "firstName";

  let user1 = {
    firstName: "John"
  };

  let user2 = null;

  alert(user1?.[key]); // John
  alert(user2?.[key]); // undefined
}


{
  /*
   * We can use ?. for safe reading
   * and deleting, but not writing
   */
  let user = null;

  user?.name = "John"; // Error, doesn't work
  // because it evaluates to: undefined = "John"

  delete user?.name; // delete user.name if user exists
}




