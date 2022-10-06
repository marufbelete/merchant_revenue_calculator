
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const GenreDesc=sequalize.define('genres_translation',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
   title:{
  type:Sequalize.STRING,
   },
   description:{
    type:Sequalize.STRING,
     }
 })
 module.exports =GenreDesc;
