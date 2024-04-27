
function sumInput() {
  let arr = [];

  while (true) {
    let num = prompt("number?");
    if (!num || !isFinite(num)) break;
    arr.push(num);
  }

  let sum = 0;

  for (let num of arr)
    sum += +num;

  return sum;
}


console.log(sumInput());
