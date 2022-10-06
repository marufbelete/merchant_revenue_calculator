
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const PageTranslation=sequalize.define('pages_translation',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
title: {
        type:Sequalize.STRING
    },
    description: {
        type:Sequalize.STRING
    },
 })
 module.exports = PageTranslation;
