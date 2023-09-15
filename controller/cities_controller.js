const CityModel = require("../models/CityModel");

module.exports.createCity = async function (req, res) {};

module.exports.getAllCities = async function (req, res) {
  try {
    const cities = await CityModel.find({});
    return res.json({ cities });
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.getCityById = async function (req, res) {
  const { id } = req.body;
  if (!id) {
    return res.status(404).json({ message: "ID is required" });
  }
  try {
    const citys = await CityModel.find({ country: id });
    return res.status(200).json(citys);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};
