'use strict';

require('should');
var mongoose = require('mongoose');
var sinon = require('sinon');
var controller = require('../app/controller');
var FakeResponse = require('./fakeResponse');

describe('Controller #getSuperheroById', function(){

  var req, res, superhero;
  var error = {message:'something has gone horribly wrong'};

  describe('when there is a matching superhero in the database', function(){
    beforeEach(function() {
      // arrange
      req = {
        params: {
          id: 'abc'
        }
      };
      res = new FakeResponse();
      superhero = {};

      sinon.stub(mongoose.Model, 'findById')
        .withArgs(req.params.id) // not necessary, but a good idea
        .yields(null, superhero);

      // act
      controller.getSuperheroById(req, res);
    });
    afterEach(function() {
      // prevents "TypeError: Attempted to wrap findById which is already wrapped"
      mongoose.Model.findById.restore();
    });
    it('the response status should be 200', function(){
      res.statusCode.should.equal(200);
    });
    it('the response should contain the superhero', function(){
      res.body.should.equal(superhero);
    });
  });

  describe('when there is no matching superhero in the database', function(){
    it('the response status should be 404');
    it('the response should contain a helpful message');
  });

  describe('when the database returns an error', function(){
    it('the response status should be 500');
    it('when the database returns an error');
  });
});