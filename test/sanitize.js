var
  sanitize = require("../index"),
  fs = require("fs"),
  should = require("should");

describe("Sanitize", function() {
  it("should sanitize text", function(done) {
    var html = '<div style="color:red" class="test" onclick="alert(\"hello\")">DIV text</div>';
    sanitize(html, function(err, resultHTML) {
      should.not.exists(err);
      resultHTML.should.equal('<div style="color: red" class="test">DIV text</div>');
      done();
    });
  });
});