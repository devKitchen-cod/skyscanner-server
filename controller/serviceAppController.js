const fs = require("fs");
const airportsModel = require("../models/airportsModel");

// module.exports.addCityToAirport = async function (req, res) {
//   const { city } = req.body;
//   let airport = [];

//   function readFileAsync(fileName) {
//     return new Promise((resolve, reject) => {
//       fs.readFile(fileName, "utf8", (err, data) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(data);
//       });
//     });
//   }

//   readFileAsync("controller/cf.json")
//     .then((fileContent) => {
//       // console.log(fileContent);
//       // airport = fileContent
//       // let t =
//       let arrayString = JSON.parse(fileContent);
//       // let arr = arrayString.split(",");
//       console.log("arrayString", typeof arrayString);

//       // let res = arrayString.map((item, index) => {
//       //   if (index < arrayString.length / 2) {
//       //     console.log(item)
//       //     return {
//       //       ...item._doc,
//       //       city: city,
//       //     };
//       //   }
//       // });

//       for (var i = 0; i < (arrayString.length/2); i++) {
//         arrayString[i].city = city; // Изменяем значение поля "city" для половины объектов
//       }
//       // console.log("RES", typeof arrayString, arrayString);
//       // let write = JSON.stringify(arrayString)
//       try {
//         // arrayString.map((item) => {
//           airportsModel.updateMany({name: 'Hartsfield-Jackson Atlanta International Airport'}, {$set: {city:city}}).then(() => {console.log('good')})
//         // }).then((err) => {
//         //   console.log('good')
//         // })
//       } catch (error) {
//         console.log('error', error)
//       }
//       // fs.writeFile("./DATA.json", write, "utf8", (err) => {
//       //   if (err) {
//       //     console.error(err);
//       //     return;
//       //   }

//       //   console.log("Данные успешно записаны в файл.");
//       // });
//     })
//     .catch((err) => {
//       console.error(err);
//     });

//   try {
//     //   airport = await airportsModel.find({});
//     //   airport.push(Object.values(res))

//     console.log("airport", typeof airport, airport.length);
//   } catch (error) {
//     console.log("error", error);
//   }

//   // try {
//   //   if (airport.length > 1) {
//   // //    let res =[]
//   // //   airport.forEach((item) => {
//   // //     //   console.log(item.name)
//   // //         item.city = city;
//   // //     });

//   //     let res = airport.map((item, index) => {
//   //         if(index < airport.length/2)
//   //          return {...item._doc, city: city}
//   //     })
//   //     console.log(res);

//   // let arrayString =
//   //   JSON.stringify(res);

//   // fs.writeFile(
//   //   "./CHANGEDDATA.json",
//   //   arrayString,
//   //   "utf8",
//   //   (err) => {
//   //     if (err) {
//   //       console.error(err);
//   //       return;
//   //     }

//   //     console.log(
//   //       "Данные успешно записаны в файл."
//   //     );
//   //   }
//   // );
//   //     console.log("FINISH!");
//   //   } else {
//   //     console.log("ERROR: NO DATA!");
//   //   }

//   //   res.send("Good");
//   // } catch (error) {
//   //   console.log("error", error);
//   // }
// };
