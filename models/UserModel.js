const mongoose = require('mongoose')
// import mongoose from 'mongoose'

const User = new mongoose.Schema({
  name: {type: String },  
  email:{type: String },
  password: {type: String },
  location: {type: String},
  bookedFlights: {type: String},
  role:{type: String},
  key_admin: {type: String}
})

module.exports = mongoose.model('User', User)
