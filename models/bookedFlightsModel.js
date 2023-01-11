const mongoose = require('mongoose')

const bookedFlights = new mongoose.Schema({
  flight: {type: String, ref: 'Flight'},
  children: {type: String},

})
module.exports = mongoose.model('bFlights', bookedFlights)