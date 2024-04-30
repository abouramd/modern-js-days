function copySorted(myArr) {
  let newArr = myArr.map(e => e);

  newArr.sort();

  return newArr;
}





let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

