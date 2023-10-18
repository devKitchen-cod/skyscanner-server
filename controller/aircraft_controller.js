module.exports.createAircraft = async function (req, res) {
  const { obj } = req.body;

  //   name,
  //   totalPlaceCount,
  //   firstClassPlaceCount,
  //   businessClassPlaceCount,
  //   premiumEcoClassPlaceCount,
  //   ecoClassPlaceCount,

  try {
    console.log('obj', obj)
  } catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
};
