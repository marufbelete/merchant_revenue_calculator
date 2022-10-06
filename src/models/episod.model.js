const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const Episod=sequalize.define('episode',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
  season:{
  type:Sequalize.INTEGER,
  allowNull:false
   },
   episode:{
    type:Sequalize.INTEGER,
    allowNull:false
     },
  slug:{
      type:Sequalize.STRING,
      defaultValue:null
    },
   release_date:{
    type: Sequalize.DATE,
   },
   thumbnail:{
    type:Sequalize.STRING,
   },
   //check
   status:{
    type:Sequalize.STRING
   },
   views:{
    type:Sequalize.INTEGER,
    defaultValue:0
  },
   like:{
     type:Sequalize.INTEGER,
     allowNull:false,
     defaultValue:0
   },
   dislike:{
    type:Sequalize.INTEGER,
    defaultValue:0

  },
 })
 module.exports = Episod;
