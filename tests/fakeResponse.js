
var FakeResponse = function() {
  this.statusCode = 404;
  this.body = {};
};

FakeResponse.prototype.status = function(code) {
  this.statusCode = code;
  return this;
};

FakeResponse.prototype.json = function(data) {
  this.body = data;
  return this;
};

module.exports = FakeResponse;