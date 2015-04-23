require('should');
var calculator = require('../app/calculator');

describe('sync vs async in mocha', function(){

  describe('#addSync', function() {

    it('should return 3 when adding 1 and 2', function() {
      calculator.addSync(1, 2).should.equal(3);
    });

  });

  describe('#addAsync', function() {

    // "done" allows mocha to run this async
    // test should fail without "done", but for some reason it's not
    it('should callback with 4 when adding 2 and 2', function(done) {
      calculator.addAsync(2, 2, function(result) {
        result.should.equal(4);
        done(); // tell mocha you're done
      });
    });

  });

  describe('#oops', function() {

    // "done" tells mocha to run this async
    // test will fail without "done"
    it('should be able to pass errors back to mocha framework for reporting', function(done) {
      calculator.oops(2, 2, function(err, result) {
        if(err) {
          done(err);
        } else {
          result.should.equal(4);
          done(); // tell mocha you're done
        }
      });
    });

  });

});
