'use strict';

require('should');
var mongoose = require('mongoose');
var sinon = require('sinon');
var controller = require('../app/controller');
var Response = require('./fakeResponse');

describe('Controller #battle', function(){

  var req, res, superhero, supervillain, error;

  describe('when the supervillain\'s attack is greater than the superhero\'s defense', function(){
    beforeEach(function() {
      // arrange
      req = {
        params: {
          hero_id: 'abc',
          villain_id: 'def'
        }
      };
      res = new Response();
      superhero = {
        defense:5
      };
      supervillain = {
        attack:20
      };
      sinon.stub(mongoose.Model, 'findById')
        .withArgs(req.params.hero_id)
        .yields(null, superhero)
        .withArgs(req.params.villain_id)
        .yields(null, supervillain);

      // act
      controller.battle(req, res);
    });
    afterEach(function() {
      mongoose.Model.findById.restore();
    });
    it('the superhero is defeated', function(){
      res.body.defeated.should.equal(superhero);
    });
  });

  describe('when the superhero\'s defense is greater than the supervillain\'s attack', function(){
    it('the villain is defeated');
  });
});