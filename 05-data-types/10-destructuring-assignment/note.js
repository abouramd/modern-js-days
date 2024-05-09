/*
 * The two most used data structures in JavaScript are Object and Array.
 *   
 * Objects allow us to create a single entity that stores data items by key.
 * Arrays allow us to gather data items into an ordered list.
 * However, when we pass these to a function, we may not need all of it. The function might only require certain elements or properties.
 *   
 * Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
 *   
 * Destructuring also works well with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.
 */


// Array destructuring
{
  {
    // we have an array with a name and surname
    let arr = ["John", "Smith"]

    // destructuring assignment
    // sets firstName = arr[0]
    // and surname = arr[1]
    let [firstName, surname] = arr;

    console.log(firstName); // John
    console.log(surname);  // Smith
  }
  {
    let [firstName, surname] = "John Smith".split(' ');
    console.log(firstName); // John
    console.log(surname);  // Smith
  }
  // ignore elements
  {
    // second element is not needed
    let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    console.log(title); // Consul
  }

  // Works with any iterable on the right-side
  {
    let [a, b, c] = "abc"; // ["a", "b", "c"]
    let [one, two, three] = new Set([1, 2, 3]);
  }
  // looping
  {
    let user = {
      name: "John",
      age: 30
    };

    // loop over the keys-and-values
    for (let [key, value] of Object.entries(user)) {
      console.log(`${key}:${value}`); // name:John, then age:30
    }

    user = new Map();
    user.set("name", "John");
    user.set("age", "30");

    // Map iterates as [key, value] pairs, very convenient for destructuring
    for (let [key, value] of user) {
      console.log(`${key}:${value}`); // name:John, then age:30
    }
  }
  // Swap variables trick
  {
    let guest = "Jane";
    let admin = "Pete";

    // Let's swap the values: make guest=Pete, admin=Jane
    [guest, admin] = [admin, guest];

    console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
  }
  // The rest ‘…’
  {
    let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    console.log(name1); // Julius
    console.log(name2); // Caesar
    // rest is an array of items, starting from the 3rd one
    console.log(rest[0]); // Consul
    console.log(rest[1]); // of the Roman Republic
    console.log(rest.length); // 2
  }

  // default values 
  {
    let [firstName, surname] = [];

    console.log(firstName); // undefined
    console.log(surname); // undefined
    // If we want a “default” value to replace the missing one, we can provide it using =:

    // default values
    [firstName = "Guest", surname = "Anonymous"] = ["Julius"];

    console.log(firstName);    // Julius (from array)
    console.log(surname); // Anonymous (default used)
  }

}

// Object destructuring 
{
  // The basic syntax is:
  // let {var1, var2} = {var1:…, var2:…}

  {
    let options = {
      title: "Menu",
      width: 100,
      height: 200
    };

    let { title, width, height } = options;

    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200

    // the order is not matter 
  }

  // changed the order in let {...}
  {
    let { height, width, title } = { title: "Menu", height: 200, width: 100 };
    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
  }

  //assign a property to a variable with another name
  {
    let options = {
      title: "Menu",
      width: 100,
      height: 200
    };

    // { sourceProperty: targetVariable }
    let { width: w, height: h, title } = options;

    // width -> w
    // height -> h
    // title -> title

    console.log(title);  // Menu
    console.log(w);      // 100
    console.log(h);      // 200
  }

  // For potentially missing properties we can set default values using "="
  {
    let options = {
      title: "Menu"
    };

    let { width = 100, height = 200, title } = options;

    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
  }
  // We also can combine both the colon and equality
  {
    let options = {
      title: "Menu"
    };

    let { width: w = 100, height: h = 200, title } = options;

    console.log(title);  // Menu
    console.log(w);      // 100
    console.log(h);      // 200
  }
  // the rest pattern "..."
  {
    let options = {
      title: "Menu",
      height: 200,
      width: 100
    };

    // title = property named title
    // rest = object with the rest of properties
    let { title, ...rest } = options;

    // now title="Menu", rest={height: 200, width: 100}
    console.log(rest.height);  // 200
    console.log(rest.width);   // 100
  }

  // Gotcha if there’s no let
  {
    let title, width, height;

    // error in this line
    // { title, width, height } = { title: "Menu", width: 200, height: 100 };

    // okay now
    ({ title, width, height } = { title: "Menu", width: 200, height: 100 });

    console.log(title); // Menu
  }
}










