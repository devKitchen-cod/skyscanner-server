const flightModel = require("../models/flightModel");

module.exports.addCountry = async function (req, res) {
  try {
    const city = await cityModel.find({});
    return res.status(200).json(city);
  } catch (error) {
    console.log(error);
    req.status(500).json(error);
  }
};

module.exports.addFlight = async function (req, res) {
  const { obj } = req.body;
  try {
    console.log("[req]", obj);
    const flight = await flightModel.create({
      origin_airport: obj.origin_airport,
      distination_airport: obj.distination_airport,
      origin_city: obj.origin_city,
      distination_city: obj.distination_city,
      price: obj.price,
      origin_time: obj.origin_time,
      distination_time: obj.distination_time,
      flight_time: obj.flight_time,
    });
    res.status(200).json("Good");
  } catch (error) {
    console.log("error", error);
  }
};
