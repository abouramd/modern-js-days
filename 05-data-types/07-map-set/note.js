// Map 
{
  /*
   * Map is a collection of keyed data items, just like an Object.
   * But the main difference is that Map allows keys of any type.
   * 
   * Methods and properties are:
   * 
   *  - new Map() – creates the map.
   *  - map.set(key, value) – stores the value by the key.
   *  - map.get(key) – returns the value by the key,
   *  undefined if key doesn’t exist in map.
   *  
   *  - map.has(key) – returns true if the key exists,
   *  false otherwise.
   *  
   *  - map.delete(key) – removes the element
   *  (the key/value pair) by the key.
   *  
   *  - map.clear() – removes everything from the map.
   *  - map.size – returns the current element count.
   */
  {
    let map = new Map();

    map.set('1', 'str1');   // a string key
    map.set(1, 'num1');     // a numeric key
    map.set(true, 'bool1'); // a boolean key

    let obj = { name: "abde" };
    map.set(obj, 'bool1'); // a object key

    // remember the regular Object? it would convert keys to string
    // Map keeps the type, so these two are different:
    console.log(map.get(1)); // 'num1'
    console.log(map.get('1')); // 'str1'
    console.log(map.get(obj)); // 'str1'

    console.log(map.size); // 3
  }

  // Iteration over Map 
  {
    /*
     * For looping over a map, there are 3 methods:
     *  
     * map.keys() – returns an iterable for keys,
     * map.values() – returns an iterable for values,
     * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
     * For instance:
     */


    let recipeMap = new Map([
      ['cucumber', 500],
      ['tomatoes', 350],
      ['onion', 50]
    ]);

    // iterate over keys (vegetables)
    for (let vegetable of recipeMap.keys()) {
      console.log(vegetable); // cucumber, tomatoes, onion
    }

    // iterate over values (amounts)
    for (let amount of recipeMap.values()) {
      console.log(amount); // 500, 350, 50
    }

    // iterate over [key, value] entries
    for (let entry of recipeMap) { // the same as of recipeMap.entries()
      console.log(entry); // cucumber,500 (and so on)
    }

    // Map has a built-in forEach method, similar to Array
    recipeMap.forEach((value, key, map) => {
      alert(`${key}: ${value}`); // cucumber: 500 etc
    });
  }

  // Object.entries: Map from Object

  {
    // When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, 
    let map = new Map([
      ['1', 'str1'],
      [1, 'num1'],
      [true, 'bool1'],
    ]);

    console.log(map.get(1)); // num1

    // to create a map from an object 

    let obj = {
      name: "john",
      age: 30,
    };

    map = new Map(Object.entries(obj));

    console.log(map.get('name')); // jhon 



  }
  // Object.fromEntries(map.entries()); // make a plain object 
}









