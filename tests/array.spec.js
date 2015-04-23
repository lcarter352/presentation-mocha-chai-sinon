var assert = require('assert');

describe('Array #indexOf()', function() {
  context('when the value is not present in the array', function(){
    it('should return -1', function(){
      // arrange
      var values = [1, 2, 3];

      // act
      var indexOf = values.indexOf(5);

      // assert
      assert(-1, indexOf); // this is a bad test
      // assert.equal(-1, indexOf);
    });
  });
  context('when the value is present in the array', function(){
    it.skip('should return the index of the value', function(){
      // arrange


      // act


      // assert

    });
  });
});