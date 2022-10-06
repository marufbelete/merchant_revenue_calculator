
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
const Genre=sequalize.define('genre',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
   title:{
  type:Sequalize.STRING,
   },
   slug:{
    type:Sequalize.STRING,
     },
     //check
   status:{
    type:Sequalize.STRING,
    allowNull:false,
     }
 }, {
  indexes:[{
    fields: ['title','status'],
  }]
 })
 module.exports = Genre;
