'use strict';

require('mongoose');
var Superhero = require('./superhero.js');
var Supervillain = require('./supervillain.js');

exports.getSuperheroById = function(req, res) {
  Superhero.findById(req.params.id, function(err, superhero) {
    if(err) {
      res.status(500).json(err);
    } else if (!superhero) {
      res.status(404).json({ message:'there is no superhero with id: ' + req.params.id });
    } else {
      res.status(200).json(superhero);
    }
  });
};

exports.getSupervillainAndPowers = function(req, res) {
  Supervillain
    .findOne({name:req.params.name})
    .populate('evilpowers')
    .exec(function(err, supervillain) {
      if(err) {
        res.status(500).json(err);
      } else if (!supervillain) {
        res.status(404).json({ message:'there is no supervillain with name: ' + req.params.name });
      } else {
        res.status(200).json({
          supervillain:supervillain,
          evilpowers:supervillain.evilpowers
        });
      }
  });
};

exports.battle = function(req, res) {
  Superhero.findById(req.params.hero_id, function(err, superhero) {
      Supervillain.findById(req.params.villain_id, function(err, supervillain) {
        if(supervillain.attack > superhero.defense) {
          res.status(200).json({defeated:superhero});
        } else {
          res.status(200).json({defeated:supervillain});
        }
      });
  });
};

exports.melee = function(req, res) {
  Superhero
    .findById(req.params.hero_id)
    .populate('superpowers')
    .exec(function(err, superhero) {
      Supervillain
        .findById(req.params.villain_id)
        .populate('evilpowers')
        .exec(function(err, supervillain) {
          if(supervillain.evilpowers.length > superhero.superpowers.length) {
            res.status(200).json({defeated:superhero});
          } else {
            res.status(200).json({defeated:supervillain});
          }
      });
  });
};