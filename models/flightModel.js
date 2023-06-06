const mongoose = require("mongoose");

const flightModel = new mongoose.Schema({
  name: {type: String},
  origin_airport: { type: String },
  distination_airport: { type: String },
  origin_city: { type: String },
  distination_city: { type: String },
  flight_time: { type: String },
  origin_time: { type: String },
  distination_time: { type: String },
  price: { type: String },
});
module.exports = mongoose.model("Flight", flightModel);
