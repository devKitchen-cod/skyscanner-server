const mongoose = require('mongoose')

const Country = new mongoose.Schema({
  name: {type: String},
  country_code: {type: String}
  
})
module.exports = mongoose.model('Airport', Airport)