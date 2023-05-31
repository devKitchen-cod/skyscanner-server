const { default: axios } = require("axios");
const cityModel = require("../models/cityModel");
const fs = require('fs');
const airportsModel = require("../models/airportsModel");

module.exports.getCity = async function(req, res){
 
  try {
    const city = await cityModel.find({})
    return res.status(200).json(city)
  } catch (error) {
    console.log(error)
    req.status(500).json(error)
  }
}

  module.exports.getAirpots = async function(req, res){
    try {
      const airports = await airportsModel.find({})
      return res.status(200).json(airports)
    } catch (error) {
      console.log('error', error)
    }
  }