const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//Development Url at local host
// mongoose.connect("mongodb://127.0.0.1:27017/employee").then(() => {
//   console.log(`Welcome! MongoDb connected Successfully `);
// })

//Live Url at remote server
try{mongoose.connect("mongodb://ritik:ritik@3.111.58.65:27017/?authMechanism=DEFAULT").then(() => {
  console.log(`Welcome! AWS Server connected Successfully`);

});
}catch(err){
  console.log("Db Not Connectetd yet")
console.log(err);


}




