// string lenght (it is a property not a method)
{
  console.log("abdelhay".length); // 8
}

// accessing characters
{
  let str = "abdelhay";

  console.log(str[0]); // char in index 0 
  console.log(str.at(0)); // char in index 0 

  console.log(str[str.length - 1]); // char in index 0 
  console.log(str.at(-1)); // char in index 0 

  // we can iterate over char using for ... of 
  for (let c of str) {
    console.log(c);
  }

}

// string are immutable you can't change the value of a char 
{
  'use strict';

  let str = "hello";

  str[0] = 'a'; // is not going to change

  console.log(str);
}

// change the case 
{
  let str = "abdelhay";

  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
}


// search for substring 
{
  /*
   * str.indexOf(substr, pos) it look for 
   * substr starting from the pos and return 
   * the pos where the match is found or 
   * -1 if no match found.
   */
  {
    let str = "abcdef abc de f";
    console.log(str.indexOf('abc')); // return 0 
    console.log(str.indexOf('Abc')); // return -1 
    console.log(str.indexOf('de')); // return 3 
    console.log(str.indexOf('de', 4)); // return 11 

    // there is str.lastIndexOf(); it start search from the end

  }

  // includes(), startsWith(), endsWith()
  {
    // they search and return true or false
    console.log("abdelhay b".includes("lhay")); // true
    console.log("abdelhay b".includes("lhAy")); // false
    console.log("abdelhay b".startsWith("lhay")); // false
    console.log("abdelhay b".startsWith("abde")); // true
    console.log("abdelhay b".endsWith("abde")); // flase
    console.log("abdelhay".endsWith("hay")); // true
  }

}

// Getting a substring 
{
  // substring() return the from start to end
  console.log("hello world".substring(3, 7));
  // slice() return the from start to end
  console.log("hello world".slice(3, 7));
  //slice can work with nigative values 
  console.log("hello world".slice(-7, -3));
  // substr() return the from start with the giving lenght 
  console.log("hello world".substr(3, 7));
  //slice can work with nigative values 
  console.log("hello world".substr(-3, 4));
}

{
  // codePointAt(index) return the ascci ind this index 
  console.log("hello".codePointAt(0));

  // fromCodePoint(ascci) return the char with this ascci
  console.log(String.fromCodePoint(48));
}

{
  /*
   * localeCompare() return intger 
   * return a negative number if str is less than str2
   * return a positive number if str is greater than str2
   * return 0 if they are equivalent.
   */

  console.log("abdelhaya".localeCompare("abdelhaya"));
  console.log("abdelhaya".localeCompare("abdelhayA"));
  console.log("abdelhayA".localeCompare("abdelhaya"));
}

{
  // trim() remove spaces from start and end 
  console.log("   abelahy     ".trim());

  // repeat(n) repeat the string n time 
  console.log("abc ".repeat(4));

  // replace() replace a word with new word in the string and return a new one.

  console.log("abc ".replace("bc", "a"));

}


