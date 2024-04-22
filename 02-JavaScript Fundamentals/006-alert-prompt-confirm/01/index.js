let userName = prompt("What is your name?");

console.log(`the user name is ${userName}`);

let message;

if (userName == null)
  message = "you should enter your name";
else
  message = `nice to meet you ${userName}`;

alert(message);
