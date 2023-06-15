// const airportsModel = require("../models/airportsModel");
// const fs = require("fs");

// const Country = require("../models/newCountryModel");
// const City = require("../models/newCityModel");
// const Airport = require("../models/newAirportModel");

// module.exports.RelocateData = async function (req, res) {
//   let state;

//   try {
//     console.log("START!");
//     // const country = await Country.find({});
//     // const city = await City.find({});
//     // const res = await axios.get(
//     //   "https://flight-radar1.p.rapidapi.com/airports/list",
//     //   {
//     //     headers: {
//     //       "X-RapidAPI-Key":
//     //         "acb40270d7msh18cf7aa34d8a184p1330bajsn367e14cb9e44",
//     //       "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
//     //     },
//     //   }
//     // );
//     // let data = res.data.rows;
//     // console.log(typeof data, data.length);

//     // data.map((item) => {
//     //   City.find({ name: item.city }, (err_city, finded_city) => {
//     //     if (err_city) {
//     //       console.log("ERROR");
//     //     }
//     //     if (!finded_city) {
//     //       console.log("NO CITY");
//     //     }

//     //     Country.find({ name: item.country }, (err_country, finded_country) => {
//     //       if (err_country) {
//     //         console.log("ERROR");
//     //       }
//     //       if (!finded_city) {
//     //         console.log("NO COUNTRY");
//     //       }
//     //       finded_city.map((item_city) => {
//     //         finded_country.map((item_country) => {
//     //           console.log(item.name, item_city._id)
//     //           Airport.create({
//     //             name: item.name,
//     //             city: item_city._id,
//     //             country: item_country._id,
//     //             iata_code: item.iata,
//     //             icao_code: item.icao,
//     //             lat: item.lat,
//     //             lon: item.lon,
//     //             timezone_name: item.timezone.name,
//     //             timezone_offset: item.timezone.offset,
//     //             timezone_offsetHours: item.timezone.offsetHours,
//     //             timezone_abbr: item.timezone.abbr,
//     //             timezone_abbrName: item.timezone.abbrName,
//     //             timezone_isDst: item.timezone.isDst,
//     //           });
//     //         });
//     //       });
//     //     });
//     //   });
//     // });

//     console.log("SUCCESS!");
//   } catch (error) {
//     console.log("ERROR", error);
//     res.status(500);
//   }
// };
