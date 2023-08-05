const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//Development Url at local host
// mongoose.connect("mongodb://127.0.0.1:27017/employee").then(() => {
//   console.log(`Welcome! MongoDb connected Successfully `);
// })

//Live Url at remote server
mongoose.connect("mongodb://shashi:shashi@3.110.83.35:27017/?authMechanism=DEFAULT").then(() => {
  console.log(`Welcome! MongoDb connected Successfully `);
})




