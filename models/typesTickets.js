const mongoose = require("mongoose");

const typeTicket = new mongoose.Schema({
  name: {type: String},  
});
module.exports = mongoose.model("TipeOfTicket", typeTicket);
