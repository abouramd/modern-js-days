
// array provide a lote of methods 

// add or remove items
{

  {
    // arr.push(...items) – adds items to the end,
    // arr.pop() – extracts an item from the end,
    // arr.shift() – extracts an item from the beginning,
    // arr.unshift(...items) – adds items to the beginning.

    let fruits = ["Apple", "Orange", "Pear"];

    console.log("shift", fruits.shift(), fruits);

    console.log("pop", fruits.pop(), fruits);

    console.log("unshift", fruits.unshift("apple"), fruits);

    console.log("push", fruits.push("apple"), fruits);

    console.log("unshift", fruits.unshift("apple1", "orange"), fruits);

    console.log("push", fruits.push("apple1", "orange"), fruits);

  }

  // to remove an elemment from array 

  {
    {
      // if we use delete elemment will remove put 
      // the size of the array will not change
      let arr = ["abde", "lhay", "bouram"];

      delete arr[1];

      console.log(arr[1]); // undefined 

      console.log(arr.length); // still 3
    }

    // splice(start, size, ... items);
    {
      /*
       * Removes elements from an array and,
       * if necessary, inserts new elements
       * in their place, returning the deleted
       * elements.
       */

      let arr = ["abde", "lhay", "bouram", "dane"];

      arr.splice(1, 1); // remove

      console.log(String(arr));

      arr.splice(1, 0, "lhay"); // insert

      console.log(String(arr));

      arr.splice(2, 2, "first", "second"); // replace

      console.log(String(arr));

      arr.splice(-3, 2); // negative are allowed

      console.log(String(arr));
    }

    // slice(start, end);

    {
      /*
       * get a subarray from the original array 
       * without change in the original one
       * do the same work like in the string
       */

      let arr = ["abde", "lhay", "bouram", "dane"];

      console.log(arr.slice(1, 2));

      console.log(arr.slice(2, 4));

      console.log(arr.slice(0, 4));
    }

    // array concat()
    {
      // concat() create a new array from an other arrays and additional items 

      console.log([1, 3].concat(2, 4, [7, 6])); // [ 1, 3, 2, 4, 7, 6]

      console.log([1, 3].concat([2, 4], [7, 6])); // [ 1, 3, 2, 4, 7, 6]

      // it normaly doesn't concat object but 

      let arrayLike = {
        0: "hi",
        1: "hello",
        2: "bye",
        [Symbol.isConcatSpreadable]: true,
        length: 4,
      };

      console.log([1, 3].concat([2, 4], arrayLike)); // [ 1, 3, 2, 4, 7, 6]
    }
  }
}

// iterate: forEach 
{
  // this function allow ro run a function for every elemment in the array 
  console.log('forEach');

  let arr = ["abdelhay", "bouramdane", "1337", "leet", "school"]

  arr.forEach(console.log);

  // it pass to the call back function the elemment the index and the array 

  arr.forEach((e, i, a) => {
    console.log("elemment", e);
    console.log("index", i);
    a[i] = e.toUpperCase();
  });

  console.log(arr);
}

// search in array
{
  let arr = [1, 3, 5, 6, 7, 4, 1, 3, 8, 19];
  {
    /*
     * you can use indexOf / lastindexOf and includes
     *
     * this function is the same as string
     */


    console.log(arr.indexOf(1));
    console.log(arr.lastIndexOf(1));
    console.log(arr.includes(3));

    // includes handle NaN correctly 

    console.log([NaN].indexOf(NaN)); // -1
    console.log([NaN].includes(NaN)); // true  

    // this is because includes is new in js
  }

  // find()
  {
    let num = 5;
    let res = arr.find((item, index, myArray) => {
      // if return true it stop iteration and return the item 
      // if end without return true it return undefined
      return (item == num);
    });
    console.log(res)
  }
  // findIndex / findLastIndex 
  {
    let num = 3;
    let res = arr.findIndex((item, index, myArray) => {
      // if return true it stop iteration and return the index 
      // if end without return true it return undefined
      return (item == num);
    });
    console.log(res);

    res = arr.find((item, index, myArray) => {
      // it iterate from end to start 
      // if return true it stop iteration and return the index 
      // if end without return true it return undefined
      return (item == num);
    });
    console.log(res)


  }
}

// transform

{
  let arr = [1, 3, 5, 6, 7, 4, 1, 3, 8, 19];
  // filter 
  {
    let res = arr.filter((item, index, myArray) => {
      // if return true item added to resault
      // if end without return any true it return []
      return (item % 2 == 0);
    });
    console.log(res);
  }

  // map
  {
    let res = arr.map((item, index, myArray) => {
      // put return value in the new array in the same index 
      return (item * 2);
    });
    console.log(res);
  }

  // sort 
  {
    arr.sort() // sort sort items as a strings 
    // thats why "19" < "2"

    console.log(arr.toString());

    // we can use a compare function 

    arr.sort((a, b) => {
      return a - b;
    });

    console.log(arr.toString());
  }


  // reverse 
  {
    arr.reverse();
    console.log(arr.toString());
  }

  // split and join 
  {
    // we can split a string with an other string 
    let str = "123-456-789";

    let arr = str.split('-');

    console.log(arr);

    // we can join the elements of array with a string 

    str = arr.join('_');

    console.log(str);
  }

  // reduce / reduceRight 
  {
    /*
     * 
     * Arguments:
     * 
     * accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
     *   item – is the current array item.
     *   index – is its position.
     *   array – is the array.
     * 
     * As function is applied, the result of the previous function call is passed to the next one as the first argument.
     * So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.
     *   
     *   let value = arr.reduce(function(accumulator, item, index, array) {
     *      // ...
     *  }, [initial]);
     */

    let value = [1, 2, 3, 4, 5].reduce(function(accumulator, item, index, array) {
      return accumulator + item;
    }, 0);

    console.log(value);


    // reduceRight do the same in other dirction
  }
}

// Array.isArray
// array is a normal object to separate array from other object using Array.isArray([])
{
  console.log(Array.isArray([])); // true 
  console.log(Array.isArray({})); // false 
}



