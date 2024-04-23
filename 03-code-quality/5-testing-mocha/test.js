// const { describe, before, after } = require("mocha");

describe("title", () => {

  before(() => {
    /* this call back functin will run once
      * before all the tests
      */
    console.log("before function");
  });

  after(() => {
    /* this call back functin will run once
      * after all the tests
      */
    console.log("after function");
  });

  beforeEach(() => {
    /* this call back functin will run once
      * before each of the tests
      */
    console.log("beforeEach function");
  });

  afterEach(() => {
    /* this call back functin will run once
      * after each of the tests
      */
    console.log("afterEach function");
  });

  // test 1
  it('test 1 title', () => {
    // test logic
    console.log("test 1");
  });
  // test 2
  it('test 2 title', () => {
    // test logic
    console.log("test 2");
  });
  // test 3
  it('test 3 title', () => {
    // test logic
    console.log("test 3");
  });

  it("2 raised to power 3 is 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function() {
    assert.equal(pow(3, 4), 81);
  });

});


describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});

// nested describe

describe("pow", function() {

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added
  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

  /*
   * There are other assertions in Chai as well, for instance:
   * 
   * assert.equal(value1, value2) – checks the equality value1 == value2.
   * assert.strictEqual(value1, value2) – checks the strict equality value1 === value2.
  * assert.notEqual, assert.notStrictEqual – inverse checks to the ones above.
  * assert.isTrue(value) – checks that value === true
  * assert.isFalse(value) – checks that value === false
  * …the full list is in the docs
  */
});






