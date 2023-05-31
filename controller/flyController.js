const axios = require("axios");

module.exports.searchAirport = async function (req, res) {
	const obj = req.body;

	try {
		const result = await axios.get(
			"https://skyscanner50.p.rapidapi.com/api/v1/searchFlights",
			{
        headers: {
          "X-RapidAPI-Key":
            "acb40270d7msh18cf7aa34d8a184p1330bajsn367e14cb9e44",
          "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
        },
				params: {
					origin: "LOND",
					destination: "NYCA",
					date: "2023-01-19",
					adults: "1",
					currency: "USD",
					countryCode: "US",
					market: "en-US",
				},
			}
      
		);
		console.log(result.data)
	const result1 = result.data
		res.status(200).json({ result1 });
	} catch (error) {
		console.log(error)
		console.log("err");
	}
};
