
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const Page=sequalize.define('page',{
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
  status:{
  type:Sequalize.STRING,
    },
 })
 module.exports = Page;
