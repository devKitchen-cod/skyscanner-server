const CountryModel = require('../models/newCountryModel')
const CityModel = require('../models/newCityModel')
const AirportModel = require('../models/newAirportModel')


module.exports.getCountry = async function(req, res){ 
  try {
    console.log('START!')
    const country = await CountryModel.find({})
    return res.status(200).json(country)
  } catch (error) {
    console.log('error', error)
    req.status(500).json(error)
  }
}

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
  // let state;
  // let code_arr = [];
  // let c_name_arr = [];
  try {
  //   console.log("GOOD");
  //   const CODE = "US";
  //   const codes = await airportsModel.find({
  //     country: { $exists: false },
  //   });
  //   console.log(codes.length);

  //   codes.map((item) => {
  //     // console.log('CODES', item.country_code)
  //     let t = item.country_code;
  //     code_arr.push(t);
  //   });

  //   const airports = await airportsModel.find({
  //     country: { $exists: false },
  //   });

  //   code_arr.map(async (item_code) => {
  //     let country_name = await axios.get( 
  //       `https://restcountries.com/v3.1/alpha/${item_code}`
  //     );
  //     let temp = country_name.data;
  //     temp.map((item) => { 
  //       // console.log("item.name.common", item.name.common);
  //       state = item.name.common;
  //     });   
   
  //     // console.log("state", state);
  //     airports.map(async () => {   
  //       let res = await airportsModel.updateMany(
  //         { country_code: item_code }, 
  //         { $set: { country: state } }     
  //       );   
  //       // console.log(res);      
  //     });        
  //   });     
      
  //   console.log("Success!");    
 
    return res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
