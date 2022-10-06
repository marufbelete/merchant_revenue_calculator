const {Sequelize}=require('sequelize');
//    const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
//     dialect:"mssql",
//     host:process.env.DB_HOST,
//     dialectOptions: {
//         encrypt: true
//       }
// });
// module.exports=sequelize;

//local
let sequalize
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== "production") {
    sequalize=new Sequelize("movie","root","12345",{
        dialect:"mariadb",
        host:"localhost",
        //define:{freezeTableName:true}//general place to stop auto plurizing
        //the model name will be default to table name
    });
  }
  else{
    sequalize=new Sequelize("postgres","postgres","12345",{
        dialect:"postgres",
        host:"localhost",
        //define:{freezeTableName:true}//general place to stop auto plurizing
        //the model name will be default to table name
    });
  }

module.exports=sequalize;








// When eager loading, we can force the query to 
// return only records which have an associated model,
// User.findAll({
//   include: {
//     model: Task,
//     required: true
//   }
// });
//   filter by associate model when we filter
//  by associate model sequelize automaticaly set required: true
// User.findAll({
//   include: {
//     model: Tool,
//     as: 'Instruments'
//     where: {
//       size: {
//         [Op.ne]: 'small'
//       }
//     }
//   }
// });

// Find all projects with a least one task where task.state === project.state
// Project.findAll({
//   include: {
//     model: Task,
//     where: {
//       state: Sequelize.col('project.state')
//     }
//   }
// })
//other way round
// To obtain top-level WHERE clauses that involve
//  nested columns, Sequelize provides
//  a way to reference nested columns: the '$nested.column$' syntax.
// User.findAll({
//   where: {
//     '$Instruments.size$': { [Op.ne]: 'small' }
//   },
//   include: [{
//     model: Tool,
//     as: 'Instruments'
//   }]
// });
// The $nested.column$ syntax also works for columns
//  that are nested several levels deep, 
//  such as $some.super.deeply.nested.column$. Therefore,
//  you can use this to make complex filters on deeply nested columns.

// For Many To Many relation
// default
// {
//   "id": 1,
//   "name": "foo",
//   "Bars": [
//     {
//       "id": 1,
//       "name": "bar",
//       "Foo_Bar": {
//         "FooId": 1,
//         "BarId": 1
//       }
//     }
//   ]
// }

// Foo.findAll({
//   include: [{
//     model: Bar,
//     through: {
//       attributes: [/* list the wanted attributes here */]
//     }
//   }]
// });
// if attributes:[] junction table will be ommited
// {
//   "id": 1,
//   "name": "foo",
//   "Bars": [
//     {
//       "id": 1,
//       "name": "bar"
//     }
//   ]
// }
// we can also filter by junction table
// User.findAll({
//   include: [{
//     model: Project,
//     through: {
//       where: {
//         // Here, `completed` is a column present at the junction table
//         completed: true
//       }
//     }
//   }]
// });

// Fetch all models associated with User
// User.findAll({ include: { all: true }});

// Fetch all models associated with User and their nested associations (recursively)
// User.findAll({ include: { all: true, nested: true }});
// soft delete for associate
// User.findAll({
//   include: [{
//     model: Tool,
//     as: 'Instruments',
//     where: { size: { [Op.ne]: 'small' } },
//     paranoid: false
//   }]
// });

// Company.findAll({
//   include: Division,
//   order: [
//     // We start the order array with the model we want to sort
//     [Division, 'name', 'ASC']
//   ]
// });
// Company.findAll({
//   include: Division,
//   order: [
//     [Division, 'name', 'DESC']
//   ]
// });
// Company.findAll({
//   // If the include uses an alias...
//   include: { model: Division, as: 'Div' },
//   order: [
//     // ...we use the same syntax from the include
//     // in the beginning of the order array
//     [{ model: Division, as: 'Div' }, 'name', 'DESC']
//   ]
// });

// Company.findAll({
//   // If we have includes nested in several levels...
//   include: {
//     model: Division,
//     include: Department
//   },
//   order: [
//     // ... we replicate the include chain of interest
//     // at the beginning of the order array
//     [Division, Department, 'name', 'DESC']
//   ]
// });

//creating all at once 
// return Product.create({
//   title: 'Chair',
//   user: {
//     firstName: 'Mick',
//     lastName: 'Broadstone',
//     addresses: [{
//       type: 'home',
//       line1: '100 Main St.',
//       city: 'Austin',
//       state: 'TX',
//       zip: '78704'
//     }]
//   }
// }, {
//   include: [{
//     association: Product.User,
//     include: [ User.Addresses ]
//   }]
// });

//Many to Many
// const User_Profile = sequelize.define('User_Profile', {
//   selfGranted: DataTypes.BOOLEAN  //add our own field
// }, { timestamps: false });
// User.belongsToMany(Profile, { through: User_Profile });
// Profile.belongsToMany(User, { through: User_Profile });

// const amidala = await User.create({ username: 'p4dm3', points: 1000 });
// const queen = await Profile.create({ name: 'Queen' });
// await amidala.addProfile(queen, { through: { selfGranted: false } });
// const result = await User.findOne({
//   where: { username: 'p4dm3' },
//   include: Profile
// });
// console.log(result);