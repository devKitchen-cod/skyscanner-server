const mongoose = require("mongoose");

const flightModel = new mongoose.Schema({
  name: {type: String},

  origin_airport_name: { type: String },
  origin_airport_id: {type: mongoose.Schema.Types.ObjectId, ref: 'AirportSchema'},

  distination_airport_name: { type: String },
  distination_airport_id: {type: mongoose.Schema.Types.ObjectId, ref: 'AirportSchema'},

  origin_city_name: { type: String },
  origin_city_id: {type: mongoose.Schema.Types.ObjectId, ref: 'CitySchema'},

  distination_city_name: { type: String },
  distination_city_id:{type: mongoose.Schema.Types.ObjectId, ref: 'CitySchema'},

  
  flight_time: { type: String },
  origin_time: { type: String },
  distination_time: { type: String },
  price: { type: String },
});
module.exports = mongoose.model("Flight", flightModel);
