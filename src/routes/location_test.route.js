const express = require('express');
const router = express.Router();
// const userauth = require("../middleware/auth.middleware")
// const redisCatch =require('../middleware/redis_cache')
const {errorHandler} = require('../middleware/errohandling.middleware')
// const { createMovie,getMovie} = require('../controllers/movie.controller')
const {getLocationByName,getLocationByCoordinate,getLocationDetail} = require('../controllers/location.controller')
//post
router.get('/getlocationbyname', getLocationByName,errorHandler)
router.get('/getlocationbycoordinate', getLocationByCoordinate,errorHandler)
router.get('/getlocationdetail', getLocationDetail,errorHandler)




module.exports = router

