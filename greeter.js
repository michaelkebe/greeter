exports.Greeter = function() {
  return {
    greet: function(name) {
      return "Hello" + (name ? " " + name : "") + "!";
    }
  }
};

