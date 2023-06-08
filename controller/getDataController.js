const { default: axios } = require("axios");
const cityModel = require("../models/cityModel");
const fs = require("fs");
const airportsModel = require("../models/airportsModel");
const flightModel = require("../models/flightModel");

module.exports.getCity = async function (req, res) {
  try {
    const city = await cityModel.find({});
    return res.status(200).json(city);
  } catch (error) {
    console.log(error);
    req.status(500).json(error);
  }
};

module.exports.getAirpots = async function (req, res) {
  try {
    const airports = await airportsModel.find({});
    return res.status(200).json(airports);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports.getFindAirports = async function (req, res) {
  const { origin_city, distination_city } = req.body;
  console.log("origin_city", req.body);
  try {
    const origin_airports = await airportsModel.find({ city: origin_city });
    const distination_airports = await airportsModel.find({
      city: distination_city,
    });
    console.log(origin_airports);
    let obj = {
      origin_airports,
      distination_airports,
    };
    return res.status(200).json(obj);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports.getFlights = async function (req, res) {
  console.log('asd')
  try {
    const flights = await flightModel.find({})
    console.log('flights', flights)
    return res.status(200).json(flights)
  } catch (error) {
    console.log('error', error)
  }
}
module.exports.getFindAirport = async function (req, res) {
  const {city} = req.body
  try {
    const airports = await airportsModel.find({city: city})
    return res.status(200).json(airports)
  } catch (error) {
    console.log('error', error)
  }
}
