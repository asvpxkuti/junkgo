var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber:String,
  message:String,
  submitted_date: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Client', clientSchema);
