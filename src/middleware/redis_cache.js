// const redis = require('redis');
// const client = redis.createClient();
// const redisCatch=async (req,res,next)=>{
//   console.log("connection")
//   client.on('error', (err) => console.log('Redis Client Error', err));
//   await client.connect();
//   client.on('connect', function() {
//       console.log('Connected!');
//     });
//     // client.on('error', (err) => {
//     //   console.log(err);
//     // });
//     const Genre=await client.get('genre',(err,data)=>{
//       err&&next(err)
//       !data&&next()
//       return data
//     })
//     console.log("second time")
//     console.log(Genre)
//    return res.status(200).json(Genre)

// }

// module.exports=redisCatch






  
  //Strings
// client.set('framework', 'ReactJS',function(err, data) {
//     console.log(data); // OK
//   }); // the callback is optinal to get a notification when the operation is complete
// client.set(['framework', 'ReactJS']);
// //get
// client.get('framework', function(err, data) {
//     console.log(data); // ReactJS
//   });

//   //hasesh for object
// client.hmset('frameworks_hash', 'javascript', 'ReactJS', 'css', 'TailwindCSS', 'node', 'Express');
// //or
// client.hmset('frameworks_hash', {
//     'javascript': 'ReactJS',
//     'css': 'TailwindCSS',
//     'node': 'Express'
//   });
// client.hgetall('frameworks_hash', function(err, object) {
//   console.log(object); // { javascript: 'ReactJS', css: 'TailwindCSS', node: 'Express' }
// });
// // Note that Redis doesn’t support nested objects. 
// // All the property values in the object will be coerced into strings
// //  before getting stored

// //to store list or like array we can use lpush and rpush
// client.rpush(['frameworks_list', 'ReactJS', 'Angular'], function(err, reply) {
//     console.log(reply); // 2
//   });
//   client.lrange('frameworks_list', 0, -1, function(err, reply) {
//     console.log(reply); // [ 'ReactJS', 'Angular' ]
//   });

//   //Sets for unique value here order not preserved
//   client.sadd(['frameworks_set', 'ReactJS', 'Angular', 'Svelte', 'VueJS', 'VueJS'], function(err, reply) {
//     console.log(reply); // 4
//   });
//   client.smembers('frameworks_set', function(err, reply) {
//     console.log(reply); // [ 'Angular', 'ReactJS', 'VueJS', 'Svelte' ]
//   });

//   //to check if the key exist
//   client.exists('framework', function(err, reply) {
//     if (reply === 1) {
//       console.log('Exists!');
//     } else {
//       console.log('Doesn\'t exist!');
//     }
//   });

//   //to delete keys
//   client.del('frameworks_list', function(err, reply) {
//     console.log(reply); // 1
//   });
//   //to give expirtion for the given key
//   client.set('status', 'logged_in');
//   client.expire('status', 300);

//   //incerement and decrement
//   //we can also use decr incrBy() and decrBy()
//   client.set('working_days', 5, function() {
//     client.incr('working_days', function(err, reply) {
//       console.log(reply); // 6
//     });
//   });

//   //session with redis
// const express = require('express');
// const session = require('express-session');
// const redis = require('redis');
// const client = redis.createClient();
// const redisStore = require('connect-redis')(session);

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// client.on('connect', function (err) {
//   if (err) {
//     console.log('Could not establish a connection with Redis. ' + err);
//   } else {
//     console.log('Connected to Redis successfully!');
//   }
// });

// app.use(session({
//   store: new redisStore({ client: client }),
//   secret: 'topsecret~!@#$%^&*',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     sameSite: true,
//     secure: false,
//     httpOnly: false,
//     maxAge: 1000 * 60 * 10 // 10 minutes
//   }
// }))

// app.get('/', (req, res) => {
//   const session = req.session;
//   if (session.username && session.password) {
//     if (session.username) {
//       res.send(`<h1>Welcome ${session.username}! </h1><br><a href="/logout"><button>Log out</button></a >`)
//     }
//   } else {
//     res.sendFile(__dirname + '/login.html')
//   }
// });

// app.post('/login', (req, res) => {
//   const session = req.session;
//   const { username, password } = req.body
//   session.username = username
//   session.password = password
//   res.type('html')
//   res.send('Successfully logged in!')
// });

// app.get('/logout', (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       return console.log(err);
//     }
//     res.redirect('/')
//   });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server started at port: ${PORT}`);
// });