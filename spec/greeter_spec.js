var Greeter = require("../greeter.js").Greeter;

describe("greeter", function() {

  it("can greet", function() {
    var greeter = new Greeter();
    expect(greeter.greet()).toBe("Hello!");
  });

  it("can greet", function() {
    var greeter = new Greeter();
    expect(greeter.greet("Jim")).toBe("Hello Jim!");
  });

});
