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
  // console.log("origin_city", req.body);
  try {
    const origin_airports = await airportsModel.find({ city: origin_city });
    const distination_airports = await airportsModel.find({
      city: distination_city,
    });
    // console.log(origin_airports);
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
  // console.log('asd')
  try {
    const flights = await flightModel.find({});
    // console.log('flights', flights)
    return res.status(200).json(flights);
  } catch (error) {
    console.log("error", error);
  }
};
module.exports.getFindAirport = async function (req, res) {
  const { city } = req.body;
  try {
    const airports = await airportsModel.find({ city: city });
    return res.status(200).json(airports);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports.updateAirports = async function (req, res) {
  try {
    console.log("GOOD");
    // const query = { country: { $exists: false } };
    const airports = await airportsModel.find({ country: { $exists: false } });
    console.log("airports", airports.length);

    let country_name = await axios.get(
      `https://restcountries.com/v3.1/alpha/US`
    );
    console.log("country_name", country_name.data);

    // console.log("length", airports.length);

    // let obj = airports.map(async (item) => {
    //   let country_name = await axios.get(
    //     `https://restcountries.com/v3.1/alpha/${item.country_code}`
    //   );

    //   let temp = country_name.data;

    //   temp.map(async (item1) => {
    //     console.log("NAME COUNTRY", item1.name.common);
    //     let res = await airportsModel.updateOne(
    //       { country_code: item.country_code },
    //       { $set: { country: item1.name.common } }
    //     );
    //     console.log("RES OF INSERT", res);
    //   });
    // });
    // console.log("Success!");
    //==
    let obj = airports.map(async (item) => {
      let country_name = await axios.get(
        `https://restcountries.com/v3.1/alpha/${item.country_code}`
      );

      let temp = country_name.data;
      temp.map(async (item1) => {
        console.log("NAME COUNTRY", item1.name.common);
        try {
          let res = await airportsModel.updateOne(
            { country_code: item.country_code },
            { $set: { country: item1.name.common } }
          );
          console.log("RES OF INSERT", res);
        } catch (error) {
          console.log("error", error);
        //  let error1 = JSON.stringify(error)
          // fs.writeFile("./ERROR_LIST.json", error1, "utf8", (err) => {
          //   if (err) {
          //     console.error(err);
          //     return;
          //   }
          // });
        }
      });
    });
    console.log("Success!");

    // const country = await axios.get('https://restcountries.com/v3.1/alpha/')

    // let write = JSON.stringify(airports);
    // fs.writeFile("./COUNTRY.json", write, "utf8", (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    // });

    return res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
