
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const Language=sequalize.define('language',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
   language: {
    type:Sequalize.STRING,
    allowNull:false,
},
 })
 module.exports = Language;
