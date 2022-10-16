const express = require("express");
require('dotenv').config()
const app = express();
const location_test = require('./routes/calculate.route');

const cors = require('cors');
  app.use(cors({
    ogin: '*',
    credentials: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 
app.use(location_test)
app.listen(process.env.PORT || 7000,()=>{
  console.log(`connected on port ${process.env.PORT}`)
})


module.exports=app

