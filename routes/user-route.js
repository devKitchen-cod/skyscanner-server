const express = require('express');
const router = express.Router();

const authController = require('../controller/authController')
// const flyController = require('../controller/flyController')
const flyController = require('../controller/flyController')
const cityController = require('../controller/cityController')
const getDataController = require('../controller/getDataController')
const serviceAppController = require('../controller/serviceAppController')

router.post('/auth-user-create', authController.createUser)
router.post('/auth-user-update', authController.updateUser)
router.post('/auth-user-login', authController.loginUser)
router.post('/getadmin', authController.getAdmin)
router.post('/addNewField', serviceAppController.addCityToAirport)

router.get('/getCity', getDataController.getCity)
router.get('/getAirports', getDataController.getAirpots)

// router.get('/getdata', cityController.city)
// router.post('/searchAiroport', flyController.searchAirport)
// router.post('/getairport', cityController.city)
/* GET users listing. */
router.get('/', function(req, res ) {
  res.send('respond with a resource');
});

module.exports = router;
