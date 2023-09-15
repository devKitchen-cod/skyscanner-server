const CountryModel = require("../../models/CityModel");
const CityModel = require("../../models/CityModel");
const AirportModel = require("../../models/AirportModel");

module.exports.Search = async function (req, res) {
  const { value } = req.body;
  console.log("params", value);
  if(!value) return res.status(404).json("Value is requred")
  try {
    if (value.length === 0) res.status(200);
    const city_search_result = await CityModel.find({name: value }).populate('country');
    // await CityModel.populate


    console.log(city_search_result);
    res.json({ city_search_result });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
