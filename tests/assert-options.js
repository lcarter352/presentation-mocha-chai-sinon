'use strict';

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
require('should');

describe('Assert Options', function() {

    describe('when the value is not present in Array.indexOf()', function() {

      it('assert/expect/should return -1', function(){
        // arrange
        var values = [1, 2, 3];

        // act
        var result = values.indexOf(5);

        // assert
        assert.equal(-1, result); // chai.assert
        expect(result).to.equal(-1); // chai.expect
        result.should.equal(-1); // should.js
      });

    });
});