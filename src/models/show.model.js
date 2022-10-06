
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
 const Show=sequalize.define('show',{
    _id:{
    type:Sequalize.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true,
    },
    title: {
    type:Sequalize.STRING,
    allowNull:false,
    },
    slug: {
    type:Sequalize.STRING,
    },
    start_date: {
    type:Sequalize.DATE,
    },
    end_date: {
    type:Sequalize.DATE,
    },
    //check
    status:{
    type:Sequalize.INTEGER,
    allowNull:false,
    },
    thumbnail:{
    type:Sequalize.STRING,
    allowNull:false,
    },
    genre_id:{
    type:Sequalize.INTEGER,
    references: {
    model: 'genres',
    key: '_id', 
    }
    }
 })
 module.exports = Show;
