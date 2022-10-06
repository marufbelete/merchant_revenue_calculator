const express = require("express");
require('dotenv').config()
// console.log("first of all")
// const sequelize = require("./util/database");
const app = express();
const location_test = require('./routes/location_test.route');
const cookieParser = require("cookie-parser");
const cors = require('cors');
// const relation=require('./models/relation.model')
// const responseTime=require('response-time')


  app.use(cors({
    ogin: '*',
    credentials: true
}));
app.use(cookieParser());
//log response time
// Use JSON parser for all non-webhook routes

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.use(location_test)
app.listen(process.env.PORT || 7000)

// sequelize.sync().then(async(result)=>{
// }).catch(error=>{
//   console.log(error)
// })

module.exports=app

