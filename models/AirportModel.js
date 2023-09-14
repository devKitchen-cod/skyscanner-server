const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  name: { type: String, required: true },
  city: { type: Schema.Types.ObjectId, ref: "CitySchema" },
  country: { type: Schema.Types.ObjectId, ref: "CountrySchema" },
  iata_code: { type: String, required: true},
  icao_code: {type: String, required: true},
  lat: { type: Number },
  lon: { type: Number },
  timezone_name: {type: String},
  timezone_offset: {type: Number},
  timezone_offsetHours: {type: String},
  timezone_abbr: {type: String},
  timezone_abbrName: {type: String},
  timezone_isDst: {type: Boolean},
});

module.exports = mongoose.model("AirportSchema", AirportSchema);
