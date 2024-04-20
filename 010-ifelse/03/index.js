let answer = prompt('Enter a random number?');

let userNum = Number(answer);

console.log(userNum);

if (userNum < 0)
  alert(-1);
else if (userNum > 0)
  alert(1);
else if (userNum === 0)
  alert(0);




