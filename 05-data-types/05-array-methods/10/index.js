function shuffle(arr) {
  arr.forEach((e, i, a) => {
    const oIndex = Math.floor(Math.random() * arr.length);
    a[i] = a[oIndex];
    a[oIndex] = e;
  });
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]
// ...
