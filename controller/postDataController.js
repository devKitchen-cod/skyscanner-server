const flightModel = require("../models/flightModel")

module.exports.addCountry = async function(req, res){
 
    try {
      const city = await cityModel.find({})
      return res.status(200).json(city)
    } catch (error) {
      console.log(error)
      req.status(500).json(error)
    }
  }

  module.exports.addFlight = async function(req, res){
    try {
      console.log('[req]', req)
      const flight = await flightModel.create({
        
      })
    } catch (error) {
      console.log('error', error)
    }
  }