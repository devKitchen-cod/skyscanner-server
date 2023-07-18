const mongoose = require("mongoose");

const priceList = new mongoose.Schema({
  type: {type: mongoose.Schema.Types.ObjectId, ref: 'typeTicket'},
  price: {type: Float64Array}
  
  
});
module.exports = mongoose.model("Price", priceList);
