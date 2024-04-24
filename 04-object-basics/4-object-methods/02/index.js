let calculator = {
  firstNum: 0,
  secondNum: 0,
  read: function() {
    this.firstNum = Number(prompt("a?", 0));
    this.secondNum = Number(prompt("b?", 0));
  },
  sum: function() {
    return this.firstNum + this.secondNum;
  },
  mul: function() {
    return this.firstNum * this.secondNum;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
