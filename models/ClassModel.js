const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Float32Array}
})

module.exports = mongoose.model("ClassSchema", ClassSchema);