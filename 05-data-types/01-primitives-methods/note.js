/*
 * A primitive is a value of a primitive type there are 7 primitive.
 *
 * An object can store multi values as properties, can be created with {} ( functions is object).
 */

// a primitive as and object 

{
  /* 
   * object warppers provides the extra functionality
   * to use with primitive, the object warppers are
   * different for each primitive type and are called:
   * String, Number, boolean, Symbol and BigInt. thus,
   * they provide different sets rof methods.
   */

  {
    let str = "Hello Abdelhay :)";
    console.log(str.toUpperCase());
  }

  // so primitive can provide methods, but still lightwieight

  {
    let num = 1.2345678;
    console.log(num.toFixed(2)) // 1.23 
  }

  {
    let obj1 = Number(2); // Number
    let obj2 = new Number(1); // object

    console.log(typeof obj1, obj1);
    console.log(typeof obj2, obj2);
  }



  // null and undefined they have no corresponding warpper objects and provide no methods.
  
}
