
const {DataTypes}=require('sequelize');
const sequalize = require("../util/database");
 const Catagory=sequalize.define('catagory',{
   _id:{
   type:DataTypes.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
   name:{
  type:DataTypes.STRING,
  unique: true
   },
  description:{
  type:DataTypes.STRING,
    }
 })


module.exports = Catagory ;


