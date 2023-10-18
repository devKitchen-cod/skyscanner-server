const AirportModel = require("../models/AirportModel");
const { where } = require("../models/ClassModel");
const FlightModel = require("../models/FlightModel");

const createFlight = async function (req, res) {
  // const
};

module.exports.getAllFlights = async function (req, res) {
  try {
    const flights = await FlightModel.find({});
    if (!flights.length) return res.status(404).json({ message: "No data" });
    return res.json(flights);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.getFlightById = async function (req, res) {
  const { id } = req.body;
  if (!id) return res.status(404).json({ message: "ID is required" });
  try {
    const flightById = FlightModel.findById(id);
    if (!flightById.length) return res.status(404).json({ message: "No data" });
    res.json(flightById);
  } catch (error) {
    console.log(error);
    res.status(500).json(JSON.stringify(error));
  }
};

module.exports.findFlights = async function (req, res) {
  const { from, to, type } = req.body;
  try {
    let airport_from = await AirportModel.find({
      city: from.key,
      country: from.country._id
    })
    let airport_to = await AirportModel.find({
      city: to.key,
      country: to.country._id
    })
    
      
      
  } catch (error) {
    console.log('[error]', error)
    res.status(500).json(JSON.stringify(error));
  }
};
