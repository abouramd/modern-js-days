function Calculator() {
  this.firstNum = 0;
  this.secondNum = 0;
  this.read = function() {
    this.firstNum = Number(prompt("a?", 0));
    this.secondNum = Number(prompt("b?", 0));
  };
  this.sum = function() {
    return this.firstNum + this.secondNum;
  };
  this.mul = function() {
    return this.firstNum * this.secondNum;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
