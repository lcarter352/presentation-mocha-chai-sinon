var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SuperpowerSchema = require('./superpower');

var SupervillainSchema = new Schema({
  name: String,
  secretIdentity: String,
  evilpowers: [SuperpowerSchema],
  hasMinions: {type: Boolean, default: false},
  attack: Number,
  defense: Number
});

module.exports = mongoose.model('Supervillain', SupervillainSchema);