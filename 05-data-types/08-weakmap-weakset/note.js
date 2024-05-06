// WeakMap
{
  /*
   * The first difference between Map and WeakMap
   * is that keys must be objects, not primitive values.
   */
  {
    let weakMap = new WeakMap();

    let obj = {};

    weakMap.set(obj, "ok"); // works fine (object key)

    // can't use a string as the key
    // weakMap.set("test", "Whoops"); // Error, because "test" is not an object
  }

  {

    let john = { name: "John" };

    let weakMap = new WeakMap();
    weakMap.set(john, "...");

    john = null; // overwrite the reference

    // john is removed from memory!
    // if john only exists as the key
    // of WeakMap – it will be automatically deleted from the map (and memory).
  }
  /*
   * WeakMap does not support iteration and methods
   * keys(), values(), entries(), so there’s no way
   * to get all keys or values from it.
   *
   * WeakMap has only the following methods:
   * 
   * weakMap.set(key, value)
   * weakMap.get(key)
   * weakMap.delete(key)
   * weakMap.has(key)
   */

}
