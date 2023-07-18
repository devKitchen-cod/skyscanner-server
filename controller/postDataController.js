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
  const { params, country, city, airport,  } = req.body;
  // console.log("[req]", req.body);
  try {
    console.log("[req]", params);
    const flight = await flightModel.create({
      name: `${city.origin_city.name} - ${city.distination_city.name}`,
      origin_airport_name: airport.origin_airport.name,
      origin_airport_id: airport.origin_airport.id,

      distination_airport_name: airport.distination_airport.name,
      distination_airport_id: airport.distination_airport.id,

      origin_city_name: city.origin_city.name,
      origin_city_id: city.origin_city.id,

      distination_city_name: city.distination_city.name,
      distination_city_id: city.distination_city.id,

      price: params.price,
      origin_time: params.origin_time,
      distination_time: params.distination_time,
      flight_time: params.flight_time,
      note: params.note
    });
    res.status(200).json("Good");
  } catch (error) {
    console.log("error", error);
  }
};
