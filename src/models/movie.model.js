
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
const Movie=sequalize.define('movie',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
  title:{
  type:Sequalize.STRING,
  allowNull:false,
   },
  slug:{
   type:Sequalize.STRING,
   },
   duration:{
   type:Sequalize.INTEGER
   },
   release_date:{
      type:Sequalize.DATE
            },
   thumbnail:{
   type:Sequalize.STRING
   },
   //check varbibary
   status:{
   type:Sequalize.STRING
   },
   like:{
      type:Sequalize.INTEGER,
      defaultValue:0
   },
   dilike:{
      type:Sequalize.INTEGER,
      defaultValue:0
   },
   views:{
      type:Sequalize.INTEGER,
      defaultValue:0
   }
 })

module.exports = Movie;

 