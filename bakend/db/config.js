const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//Development Url at local host
mongoose.connect("mongodb://127.0.0.1:27017/employee").then(() => {
  console.log(`Welcome! MongoDb connected Successfully `);
})

//Live Url at remote server
// mongoose.connect("mongodb://ritik:ritik@43.204.114.23:27017/?authMechanism=DEFAULT").then(() => {
//   console.log(`Welcome! AWS Server connected Successfully`);
// });




