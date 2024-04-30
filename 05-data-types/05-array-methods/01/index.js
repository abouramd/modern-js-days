function camelize(str) {
  let SplitedString = str.split('-');

  str = "";
  SplitedString.forEach((e, i) => {
    str += i ? e.toUpperCase().at(0) + e.substring(1) : e;
  });
  return str;
}



console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

