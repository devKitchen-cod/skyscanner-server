const mongoose = require('mongoose')

const City = new mongoose.Schema({
  name: {type: String},
  airports: {type: String, ref: 'Airport'}
})
module.exports = mongoose.model('City', City)