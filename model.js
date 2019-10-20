const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FbdataSchema = new Schema({
 email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Fbdata = mongoose.model('fbdata', FbdataSchema);