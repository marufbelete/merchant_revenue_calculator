const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middleware/errohandling.middleware')
const {customerCost,merchantCost,revenueInfo} = require('../controllers/calculate')
//post
router.get('/merchantcost', merchantCost,errorHandler)
router.get('/customercost', customerCost,errorHandler)
router.get('/revenueinfo', revenueInfo,errorHandler)

module.exports = router

