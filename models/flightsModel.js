const mongoose = require('mongoose')

const Flight = new mongoose.Schema({
   
  origin: {type: String, ref: 'Airport'},
  destination: {type: String, ref: 'Airport'},
  flight_time: {type: String},
  origin_time: {type: String},
  distination_time: {type: String},
  default_price: {type: String},
  
})
module.exports = mongoose.model('Flight', Flight)