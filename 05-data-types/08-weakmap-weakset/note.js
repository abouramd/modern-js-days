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

  // Usecases: additional data
  {
    // 📁 visitsCount.js
    let visitsCountMap = new WeakMap(); // map: user => visits count

    // increase the visits count
    function countUser(user) {
      let count = visitsCountMap.get(user) || 0;
      visitsCountMap.set(user, count + 1);
      console.log(user.name, visitsCountMap.get(user));
    }

    // 📁 main.js
    let john = { name: "John" };
    let abdelhay = { name: "abdelhay" };

    countUser(john); // count his visits
    countUser(abdelhay); // count his visits
    countUser(abdelhay); // count his visits
    countUser(abdelhay); // count his visits
    countUser(john); // count his visits
    countUser(john); // count his visits
    countUser(john); // count his visits
    countUser(abdelhay); // count his visits
    countUser(abdelhay); // count his visits

    // later john leaves us
    john = null;
  }

  // Use case: caching
  {
    // 📁 cache.js
    let cache = new WeakMap();

    // calculate and remember the result
    function process(obj) {
      if (!cache.has(obj)) {
        let result = /* calculate the result for */ obj;

        cache.set(obj, result);
        return result;
      }

      return cache.get(obj);
    }

    // 📁 main.js
    let obj = {/* some object */ };

    let result1 = process(obj);
    let result2 = process(obj);

    // ...later, when the object is not needed any more:
    obj = null;

    // Can't get cache.size, as it's a WeakMap,
    // but it's 0 or soon be 0
    // When obj gets garbage collected, cached data will be removed as well
  }
}

// weakSet
{
  /*
   * WeakSet behaves similarly:
   * 
   * It is analogous to Set, but we may only add objects to WeakSet (not primitives).
   * An object exists in the set while it is reachable from somewhere else.
   * Like Set, it supports add, has and delete, but not size, keys() and no iterations.
   */
  let visitedSet = new WeakSet();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  visitedSet.add(john); // John visited us
  visitedSet.add(pete); // Then Pete
  visitedSet.add(john); // John again

  // visitedSet has 2 users now

  // check if John visited?
  alert(visitedSet.has(john)); // true

  // check if Mary visited?
  alert(visitedSet.has(mary)); // false

  john = null;

  // visitedSet will be cleaned automatically
}












