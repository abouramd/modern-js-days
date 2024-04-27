while (true) {
  let input = prompt("enter a number", 0);

  if (!input) break;

  if (isNaN(input)) continue;

  alert(+input);

  break;

}
