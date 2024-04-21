
let n = Number(prompt("enter n"));
let result = "";

bigloop: for (let num = 2; num <= n; num++) {
  for (let tmpNum = 2; tmpNum < num; tmpNum++) {
    if (num % tmpNum == 0)
      continue bigloop;
  }
  if (result)
    result += `,${num}`;
  else
    result += `${num}`;
}

console.log(result);





