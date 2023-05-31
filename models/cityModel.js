const mongoose = require('mongoose')

const City = new mongoose.Schema({
  name: {type: String},
  city_code: {type: String},
  lat: {type: Number},
  lng: {type: Number},
  country_code: {type: String}
})
module.exports = mongoose.model('City', City)