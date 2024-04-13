// Automated testing means that tests are written separately,
// in addition to the code. They run our functions
// in various ways and compare results with the expected.

// Behavior Driven Development (BDD) is three things in one:
// tests AND documentation AND examples.
// Practical example
// Development of "pow": the spec
// Let's say we want to make a function pow(x, n) that
// raises x to an integer power n. We assume that n>=20.
// Before creating the code of pow, we can imagine what
// the function should do and describe it.
// Such description is called "specification" or "spec" in short,
// and contains descriptions of use cases together with tests for them
// const {describe, it} = require("node:test");


// A spec has three main building blocks:
// describe -> what functionality we're describing? In this case
// is the function pow. Used to group "workers" - the it blocks.
// it("use case description", function () {...}) -> In the title
// of it we in a human-readable way describe the use case, and the
// second argument is a function that tests it.

// Functions assert.* are used to check whether pow works as expected.

// The development flow
// The development flow looks like this:
// 1. An initial spec is written, with tests for the most basic
// functionality.
// 2. An initial implementation is created.
// 3. To check it works, we run the testing framework Mocha that runs
// the spec. While the functionality is not complete, errors are
// displayed. We make corrections until everything works.
// 4. Now we have a working initial implementation with tests.
// 5. We add more use cases to the spec, probably not yet supported
// by the implementations. Tests start to fail.
// 6. Go to 3, update the implementation till tests give no errors.
// 7. Repeat 3-6 till the functionality is ready.

// So the development is iterative. We write the spec, implement it
// , make sure tests pass, then write more tests, make sure they work
// and so on.

describe("test", function () {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});

describe("pow", function () {

  describe("raises x to power 3", function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
      });
    }

    it("for negative n the result is NaN", function() {
      assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", function() {
      assert.isNaN(pow(2, 1.5));
    });

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  // more tests to follow here...
});
