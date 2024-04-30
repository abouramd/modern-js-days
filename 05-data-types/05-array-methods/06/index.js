function Calculator() {

  this.memory = {
    '-': (a, b) => { return a - b },
    '+': (a, b) => { return a + b },
  };

  this.calculate = function(str) {
    console.log(this.memory);
    let arr = str.split(' ');

    if (arr.length != 3 || !isFinite(+arr[0]) || !isFinite(+arr[2]))
      return;

    return this.memory[arr[1]](+arr[0], +arr[2]);
  };

  this.addMethod = function(str, func) {
    this.memory[str] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8



