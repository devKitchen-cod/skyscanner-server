const mongoose = require('mongoose')
// const cityModel = require('./cityModel')

const Country = new mongoose.Schema({
  name: {type: String},
  countryCode: {type: String},
  city: {type: String, ref: 'City'}
})
module.exports = mongoose.model('Country', Country)