// ?? returns the first argument if it’s not null/undefined.

let a, b = "this is b";
// We can rewrite 
let result = a ?? b;
// using the operators that we already know, like this:
// result = (a !== null && a !== undefined) ? a : b;
console.log(result);

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)
