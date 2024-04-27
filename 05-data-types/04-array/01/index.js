let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert(fruits.length); // 4
/*
 * array is an object and object copy by referance 
 * if we change in shoppingCart we are changing fruits also
 */
