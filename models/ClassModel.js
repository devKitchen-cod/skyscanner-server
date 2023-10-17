const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    info:{type: String}
})

module.exports = mongoose.model("ClassSchema", ClassSchema);