var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SuperpowerSchema = require('./superpower');

var SuperheroSchema = new Schema({
  name: String,
  secretIdentity: String,
  superpowers: [SuperpowerSchema],
  wearsCape: {type: Boolean, default: false},
  attack: Number,
  defense: Number
});

module.exports = mongoose.model('Superhero', SuperheroSchema);