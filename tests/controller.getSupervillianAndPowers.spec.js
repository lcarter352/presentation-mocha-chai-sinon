'use strict';

require('should');
var mongoose = require('mongoose');
var sinon = require('sinon');
var controller = require('../app/controller');
var Response = require('./fakeResponse');

describe('Controller #getSupervillainAndPowers', function(){

  var req, res, superhero, supervillain, error;

  describe('when there is a matching supervillain in the database', function(){
    beforeEach(function() {
      // arrange
      req = {
        params: {
          name: 'dr. evil'
        }
      };
      res = new Response();
      supervillain = {
        evilpowers: [
          {name:'tortures kittens'},
          {name:'doesn\'t use source control'},
          {name:'doesn\'t write unit tests'}
        ]
      };
      sinon.stub(mongoose.Model, 'findOne')
        .withArgs({name:req.params.name})
        .yields(null, supervillain); // this doesn't work
        //.returns({
        //  populate: sinon.stub().returns({
        //      exec: sinon.stub().yields(null, supervillain)
        //    })
        //});

      // act
      controller.getSupervillainAndPowers(req, res);
    });
    afterEach(function() {
      mongoose.Model.findOne.restore();
    });
    it('the response contains the supervillain', function(){
      res.body.supervillain.should.equal(supervillain);
    });
    it('the response contains the supervillain\'s evil powers', function(){
      res.body.evilpowers.should.equal(supervillain.evilpowers);
    });
  });
});