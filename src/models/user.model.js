
const Sequalize=require('sequelize');
const sequalize = require("../util/database");
// static associate(models) {
//   const {
//     Movie,
// // ...
//   } = models;
///relation here
// }
 const User=sequalize.define('user',{
   _id:{
   type:Sequalize.INTEGER,
   allowNull:false,
   primaryKey: true,
   autoIncrement: true,
   },
   username:{
   type:Sequalize.STRING,
   allowNull:false,
   unique:true
   },
   email:{
   type:Sequalize.STRING,
   allowNull:false,
   unique:true
   },
   password:{
   type:Sequalize.STRING,
   allowNull:false,
   },
   birthday:{
   type:Sequalize.DATE
   },
   //check varbibary
   verified:{
   type:Sequalize.STRING
   },
   //check varbibary
   status:{
   type:Sequalize.STRING
   },
   language_id:{
   type:Sequalize.INTEGER,
   },

  
 },{freezeTableName:true,
  tableName: 'MyUser',
  timestamps: false,
   // I don't want createdAt
   createdAt: false,
   // I want updatedAt to actually be called updateTimestamp
   updatedAt: 'updateTimestamp'
})
//stop auto plurize for this model default table name will be  model name
//or writing the table name manualy MyUser
//we can disable automatic time stamp append

 module.exports = User;

 // console.log(User === sequelize.models.User);
