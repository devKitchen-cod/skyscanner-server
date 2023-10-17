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
    const city_search_result = await CityModel.find({ name: regex });
    let result = []
    city_search_result.map((item, key) => {
      result.push({value: item.name, text: item.name, key: item.name })
    })
    console.log(city_search_result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
