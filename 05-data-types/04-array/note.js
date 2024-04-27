// There are two syntaxes for creating an empty array 
{
  {
    let arr1 = new Array;
    let arr2 = new Array("Apple", "Pear", "etc");
    let arr3 = new Array(2); // will it create an array of [2] ?

    console.log(arr3[0]); // undefined! no elements.

    console.log(arr3.length); // length 2
  }
  {
    let arr1 = [];
    let arr2 = ["one", "two", "three"];
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    console.log(matrix[1][1]); // 5, the central element
  }
}

// array elem are numbered starting form zero 
{
  let arr = ["one", "two", "three"];
  // you can access an elemment use it index 
  {
    console.log(arr[0], arr[1], arr[2]);
  }

  // we can change the value in an index 
  {
    arr[0] = "newValue";
    console.log(arr[0], arr[1], arr[2]);
  }

  // we can also add a new one 
  {
    arr[3] = "newElemment";
    console.log(arr[0], arr[1], arr[2], arr[3]);
  }

  // array size
  {
    console.log(arr.length);
  }

  // show data or array 
  {
    console.log(arr);
  }

  // use at 
  {
    console.log(arr.at(-1));
    console.log(arr.at(1));
  }
}


// array can store different types
{
  let arr = [1337, "leet", () => { return "my school" }, true, { fname: "abdelhay", lname: "bouramdane" }];

  console.log(arr);
  console.log(arr.at(-1).lname);

  for (elem in arr) {
    console.log(`index[${elem}] = ${arr[elem]} type => ${typeof arr[elem]}`);
  }
}

// push/pop, unshift/shift

{
  // Arrays in JavaScript can work both as a queue and as a stack and also deque
  // push appends an element to the end.
  // pop takes an element from the end.
  // unshift add an elements to the start.
  // shift remove an element to the start.

  let fruits = ["Apple", "Orange", "Pear"];

  console.log("shift", fruits.shift(), fruits);

  console.log("pop", fruits.pop(), fruits);

  console.log("unshift", fruits.unshift("apple"), fruits);

  console.log("push", fruits.push("apple"), fruits);

  console.log("unshift", fruits.unshift("apple1", "orange"), fruits);

  console.log("push", fruits.push("apple1", "orange"), fruits);

}

// array at the end it is an object so the it can work like a normal object 

{
  let fruits = ["Banana"]

  let arr = fruits; // copy by reference (two variables reference the same array)

  console.log(arr === fruits); // true

  arr.push("Pear"); // modify the array by reference

  console.log(fruits); // Banana, Pear - 2 items now

  fruits[99999] = 5; // assign a property with the index far greater than its length

  fruits.age = 25; // create a property with an arbitrary name

  console.log(fruits);
  // console.log(fruits.length);
}

/*
 * Performance
 *
 * Methods push/pop run fast, while shift/unshift are slow.
 * 
 * shift operation must do 3 things:
 * 
 *   Remove the element with the index 0.
 *   Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
 *   Update the length property.
 *
 * The pop method does not need to move anything,
 * because other elements keep their indexes.
 * That’s why it’s blazingly fast.
 */


// loops
{
  let arr = ["Apple", "Orange", "Pear"];
  // for loop 
  {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }

  // for ... of
  {
    for (let elem of arr) {
      console.log(elem);
    }
  }

  // for ... in
  {
    for (let key in arr) {
      console.log(arr[key]);
    }
  }

  // for ... in have some probleme it access non-numeric value 
}

// note about length

{
  /*
   * the length property automatically updatewhen modify the array
   *
   * it not counting the number of elemment it return the greater
   * numeric index plus one.
   */
  let arr = []
  console.log(arr.length);
  arr[123] = "abdelhay";
  console.log(arr.length);

  /*
   * another interesting thing about the length property is that it’s writable.
   *
   * If we increase it manually, nothing interesting happens.
   * But if we decrease it, the array is truncated. The process is irreversible,
   */

  arr.length = 700;
  console.log(arr.length, arr);

  arr[10] = 20;
  arr.length = 20;
  console.log(arr.length, arr);

}

// toString 
{
  /*
   * array have their own implementation of toString method that returns a comma-separated list of elements.
   */
  {
    let arr = [1, 2, 3];

    console.log(String(arr)); // 1,2,3
    console.log(String(arr) === '1,2,3'); // true
  }
  // arrays have toString only   
  {
    console.log([] + 1); // "1"
    console.log([1] + 1); // "11"
    console.log([1, 2] + 1); // "1,21"
    // the same as 
    console.log("" + 1); // "1"
    console.log("1" + 1); // "11"
    console.log("1,2" + 1); // "1,21"
  }
}

// don't compare arrays using == or === 
// you should compare item by item in a loop






