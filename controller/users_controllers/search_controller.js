const CountryModel = require("../../models/CityModel");
const CityModel = require("../../models/CityModel");
const AirportModel = require("../../models/AirportModel");

module.exports.Search = async function (req, res) {
  const { value } = req.body;
  console.log("params", value);
  if (!value) return res.status(404).json("Value is requred");
  try {
    // if (value.length === 0) res.status(200);
    // const city_search_result = await CityModel.find({
    //   name: "Bergen",
    // }).populate("country");
    // await CityModel.populate
    const regex = new RegExp(`^${value}`, "i");
    const city_search_result = await CityModel.find({ name: regex }).populate('country');
    console.log('[city_search_result]', city_search_result)
    let result = [];
    city_search_result.map((item, key) => {

      result.push({ value: item.name, text: item.name, key: item.id, country: item.country });
    });
    // console.log(city_search_result);
    res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.SearchFlights = async function (req, res) {
  const { from, to, type } = req.body;
  try {
    console.log('[params]', params)

  } catch (error) {
    return res.status(500).json(JSON.stringify(error));
  }
};
