const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PlaceSchema = new mongoose.Schema({
    class: {type: Schema.Types.ObjectId, ref: "ClassSchema"},
    aircraft: {type: Schema.Types.ObjectId, ref: "AircraftSchema"},
    status: {type: Boolean},
    price: {type: Float32Array}
})

module.exports = mongoose.model("PlaceSchema", PlaceSchema);