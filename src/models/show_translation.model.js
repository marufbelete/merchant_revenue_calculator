
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const ShowTranslation=sequalize.define('shows_translation',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
language_id: {
    type:Sequalize.INTEGER,
    references: {
    model: 'languages',
    key: '_id', 
 }
    },
title: {
        type:Sequalize.STRING
    },
    description: {
        type:Sequalize.STRING
    },
    tag: {
        type:Sequalize.STRING
    },
 })
 module.exports = ShowTranslation;
