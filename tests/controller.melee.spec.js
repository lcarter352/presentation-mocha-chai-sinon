'use strict';

require('should');
var mongoose = require('mongoose');
var sinon = require('sinon');
var controller = require('../app/controller');
var Response = require('./fakeResponse');

describe('Controller #melee', function(){

  var req, res, superhero, supervillain, error;

  describe('when the supervillain has more evilpowers than the superhero has superpowers', function(){
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
        superpowers: [
          {name:'x-ray vision'},
          {name:'invisibility'},
          {name:'makes a tasty omelette'}
        ]
      };
      supervillain = {
        evilpowers: [
          {name:'maniacal laugh'},
          {name:'tortures kittens'},
          {name:'doesn\'t use source control'},
          {name:'doesn\'t write unit tests'}
        ]
      };
      sinon.stub(mongoose.Model, 'findById')
        .withArgs(req.params.hero_id).returns({
          populate: sinon.stub().returns({
              exec: sinon.stub().yields(null, superhero)
            })
        })
        .withArgs(req.params.villain_id).returns({
          populate: sinon.stub().returns({
              exec: sinon.stub().yields(null, supervillain)
            })
        });

      // act
      controller.melee(req, res);
    });
    afterEach(function() {
      mongoose.Model.findById.restore();
    });
    it('the superhero is defeated', function(){
      res.body.defeated.should.equal(superhero);
    });
  });

  describe('when the superhero has more superpowers than the supervillain has evilpowers', function(){
    it('the villain is defeated');
  });
});