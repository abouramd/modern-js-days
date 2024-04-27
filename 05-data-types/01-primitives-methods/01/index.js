let str = "hello";

str.test = 5; // error if 'use strict' is used 

console.log(str.test); // undefined 
