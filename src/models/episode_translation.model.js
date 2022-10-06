const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const EpisodTranslation=sequalize.define('episodes_translation',{
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
  },
   tag:{
    type:Sequalize.STRING,
    defaultValue:null
  }
 })
 module.exports =EpisodTranslation;
