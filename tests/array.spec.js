var assert = require('assert');

describe('Array #indexOf()', function() {
  context('when the value is not present in the array', function(){
    it('should return -1', function(){
      // arrange
      var values = [1, 2, 3];

      // act
      var result = values.indexOf(5);

      // assert
      // warning: this is a bad test ==================
      assert(-1, result);
      //assert.equal(-1, indexOf);
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