const express = require('express');
const router = express.Router();

const authController = require('../controller/authController')
// const flyController = require('../controller/flyController')
const flyController = require('../controller/flyController')
const cityController = require('../controller/cityController')

router.post('/auth-user-create', authController.createUser)
router.post('/auth-user-update', authController.updateUser)
router.post('/auth-user-login', authController.loginUser)
router.post('/getadmin', authController.getAdmin)
// router.get('/getdata', cityController.city)
router.post('/searchAiroport', flyController.searchAirport)
/* GET users listing. */
router.get('/', function(req, res ) {
  res.send('respond with a resource');
});

module.exports = router;
