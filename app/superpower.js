var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperpowerSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Superpower', SuperpowerSchema);