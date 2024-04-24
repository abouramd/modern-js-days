let obj = {
  name: "abdelhay",
};

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log(a == b); // true
// the only case to attchive this is by overwrite
// the return value of the functions 
