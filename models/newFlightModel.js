const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  // name: { type: String, required: true },
  origin_iata_code: { type: Schema.Types.ObjectId, ref: "AirportSchema" },
  distination_iata_code: { type: Schema.Types.ObjectId, ref: "AirportSchema" },

  origin_city: { type: Schema.Types.ObjectId, ref: "CitySchema" },
  distination_city: { type: Schema.Types.ObjectId, ref: "CitySchema" },

  origin_country_code: { type: Schema.Types.ObjectId, ref: "CountrySchema" },
  distination_country_code: {
    type: Schema.Types.ObjectId,
    ref: "CountrySchema",
  },

  flight_time: { type: String },
  origin_time: { type: String },
  distination_time: { type: String },
  price: { type: String },
});
module.exports = mongoose.model("FlightSchema", FlightSchema);