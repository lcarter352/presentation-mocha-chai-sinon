//var Calculator = exports.Calculator = function() {};

exports.addSync = function(a, b) {
  return a + b;
};

exports.addAsync = function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 100);
};

exports.oops = function(a, b, callback) {
  setTimeout(function() {
    var error = new Error('something has gone horribly wrong!');
    callback(error, null);
  }, 100);
};