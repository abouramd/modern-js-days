

function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof (obj[key]) === "number")
      obj[key] *= 2;
  }
}


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
