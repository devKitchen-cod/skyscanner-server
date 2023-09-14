const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  origin_airport: { type: Schema.Types.ObjectId, ref: "AirportSchema" },
  distination_airport: { type: Schema.Types.ObjectId, ref: "AirportSchema" },
  place: {type: Schema.Types.ObjectId, ref: "PlaceSchema"},

  flight_time: { type: String },
  origin_time: { type: String },
  distination_time: { type: String },
  // price: { type: Float32Array },
});
module.exports = mongoose.model("FlightSchema", FlightSchema);