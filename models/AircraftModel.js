const mongoose = require("mongoose");

const AircraftSchema = new mongoose.Schema({
    name: {type: String},
})

module.exports = mongoose.model("AircraftSchema", AircraftSchema);