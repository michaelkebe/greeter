var Greeter = require("../greeter.js").Greeter;

describe("greeter", function() {
  it("can be instantiated", function() {
    new Greeter();
  });
  it("can greet", function() {
    var greeter = new Greeter();
    expect(greeter.greet()).toBe("Hello!");
  });
});
