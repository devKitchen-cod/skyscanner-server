const mongoose = require('mongoose')

const Airport = new mongoose.Schema({
  PlacId: {type: String},
  PlaceName: {type: String},
  CountryID: {type: String},
  
})
module.exports = mongoose.model('Airport', Airport)