describe('pow tests', () => {
  function makeTest(x, n) {
    it(`Raises ${x} to the power ${n}`, function() {
      assert.equal(pow(x, n), x ** n);
    });
  }

  let num = 5, power = 1;
  for (; power <= 3; power++) {
    makeTest(num, power);
    console.log("hello");
  }

  // it.only("5 in the power of 2 equals 25", function() {
  //   assert.equal(pow(5, 2), 25);
  // });

});
