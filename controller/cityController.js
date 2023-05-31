const { default: axios } = require("axios");
const cityModel = require("../models/cityModel");
const fs = require('fs');
const airportsModel = require("../models/airportsModel");

module.exports.getCity = async function(req, res){
  try {
    cityModel.find({}).then((city) => {
      //doing stuff with the user array
      // console.log(users);
      // fs.writeFile
      // city = JSON.stringify(city)
      // fs.writeFileSync('airoports_data.json', JSON.stringify(airport));
      console.log('city', city)
      res.status(200).json(city)
      // res.send(airport)

  });

  } catch (error) {
    req.status(500).json(error)
  }
}

module.exports.getCityFromApi = async function (req, res) {
    try {
      let result = await axios.get('https://airlabs.co/api/v9/airports?api_key=6a9c3347-edbc-41e2-b812-d329189554b3')
      result = result.data.response
      console.log('res= ', result)
      result.map(async (item) => {
        // console.log('item ==', item.name)
        const city = await airportsModel.create({
          name: item.name,
          iata_code: item.iata_code,
          icao_code: item.laicao_codet,
          lat: item.lat,
          lng: item.lng,
          country_code: item.country_code
        })
      })
      res.status(200).json(result)
      
    } catch (err) {
      console.log('err =', err)
    //   res.send(err)
    }
  }
  //https://airlabs.co/api/v9/schedules?dep_iata=MIA&api_key=6a9c3347-edbc-41e2-b812-d329189554b3
  //https://restcountries.com/v3.1/all

  //get collection from mongodb in expressjs?



// (async () => {
//     //await tells your code to wait till the result comes back
//     const users = await User.find({});
//     //doing stuff with the user array
//     console.log(users);
// })();




//Source: https://stackoverflow.com/questions/73379277



