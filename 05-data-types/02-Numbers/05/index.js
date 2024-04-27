function random(min, max) {
  let num = Math.random();

  num *= max - min;

  return num + min;
}


alert(random(0, 1));
alert(random(2, 5));
alert(random(3, 10));
