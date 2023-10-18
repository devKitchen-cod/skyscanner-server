const mongoose = require("mongoose");

const AircraftSchema = new mongoose.Schema({
    name: {type: String},
    totalPlaceCount: {type: Number},
    firstClassPlaceCount: {type: Number},
    businessClassPlaceCount: {type: Number},
    premiumEcoClassPlaceCount: {type: Number},
    ecoClassPlaceCount: {type: Number}
})

module.exports = mongoose.model("AircraftSchema", AircraftSchema);