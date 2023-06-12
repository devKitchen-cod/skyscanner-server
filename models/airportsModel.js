const mongoose = require("mongoose");

const Airport = new mongoose.Schema({
  name: { type: String },
  iata_code: { type: String },
  lat: { type: Number },
  lng: { type: String },
  country_code: { type: String },
  city: { type: String },
  country: { type: String },
});
module.exports = mongoose.model("Airport", Airport);
