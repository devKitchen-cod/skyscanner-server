const express = require('express');
const router = express.Router();

const authController = require('../controller/authController')
const getDataController = require('../controller/getDataController')
const postDataController = require('../controller/postDataController')
// const serviceAppController = require('../controller/serviceAppController')

router.post('/auth-user-create', authController.createUser)
router.post('/auth-user-update', authController.updateUser)
router.post('/auth-user-login', authController.loginUser)
router.post('/getadmin', authController.getAdmin)
router.post('/addFlight', postDataController.addFlight)

router.get('/getCountry', getDataController.getCountry)
router.get('/getCity', getDataController.getCity)
router.get('/getAirports', getDataController.getAirpots)
router.post('/getFindedAirports', getDataController.getFindAirports)
router.get('/getFlights', getDataController.getFlights)
router.get('/getAirportsByCity', getDataController.getFindAirport)
router.get('/updateAirports', getDataController.updateAirports)

// router.get('/serviceFunction', serviceAppController.RelocateData)

router.get('/', function(req, res ) {
  res.send('respond with a resource');
});

module.exports = router;
