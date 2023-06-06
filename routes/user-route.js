const express = require('express');
const router = express.Router();

const authController = require('../controller/authController')
// const flyController = require('../controller/flyController')
const flyController = require('../controller/flyController')
const cityController = require('../controller/cityController')
const getDataController = require('../controller/getDataController')
const serviceAppController = require('../controller/serviceAppController')
const postDataController = require('../controller/postDataController')
router.post('/auth-user-create', authController.createUser)
router.post('/auth-user-update', authController.updateUser)
router.post('/auth-user-login', authController.loginUser)
router.post('/getadmin', authController.getAdmin)
router.post('/addFlight', postDataController.addFlight)

router.get('/getCity', getDataController.getCity)
router.get('/getAirports', getDataController.getAirpots)
router.post('/getFindedAirports', getDataController.getFindAirports)
router.get('/getFlights', getDataController.getFlights)
// router.get('/getdata', cityController.city)
// router.post('/searchAiroport', flyController.searchAirport)
// router.post('/getairport', cityController.city)
/* GET users listing. */
router.get('/', function(req, res ) {
  res.send('respond with a resource');
});

module.exports = router;
