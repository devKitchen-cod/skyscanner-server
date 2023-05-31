const fs = require("fs");
const airportsModel = require("../models/airportsModel");

module.exports.addCityToAirport =
  async function (req, res) {
    const { city } = req.body;
    let airport = [];

    function readFileAsync(fileName) {
      return new Promise(
        (resolve, reject) => {
          fs.readFile(
            fileName,
            "utf8",
            (err, data) => {
              if (err) {
                reject(err);
                return;
              }
              resolve(data);
            }
          );
        }
      );
    }

    // Использование промиса для чтения файла и обработка содержимого
    readFileAsync("controller/cf.txt")
      .then((fileContent) => {
        // console.log(fileContent);
        airport = fileContent
      })
      .catch((err) => {
        console.error(err);
      });

    try {
      //   airport = await airportsModel.find({});
      //   airport.push(Object.values(res))
  
      console.log(
        "airport",
        typeof airport,
        airport.length
        
      );
    } catch (error) {
      console.log("error", error);
    }

    // try {
    //   if (airport.length > 1) {
    // //    let res =[]
    // //   airport.forEach((item) => {
    // //     //   console.log(item.name)
    // //         item.city = city;
    // //     });

    //     let res = airport.map((item, index) => {
    //         if(index < airport.length/2)
    //          return {...item._doc, city: city}
    //     })
    //     console.log(res);
    //     let arrayString =
    //       JSON.stringify(res);

    //     fs.writeFile(
    //       "./CHANGEDDATA.json",
    //       arrayString,
    //       "utf8",
    //       (err) => {
    //         if (err) {
    //           console.error(err);
    //           return;
    //         }

    //         console.log(
    //           "Данные успешно записаны в файл."
    //         );
    //       }
    //     );
    //     console.log("FINISH!");
    //   } else {
    //     console.log("ERROR: NO DATA!");
    //   }

    //   res.send("Good");
    // } catch (error) {
    //   console.log("error", error);
    // }
  };
