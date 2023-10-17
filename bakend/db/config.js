const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

//Development Url at local host
// mongoose.connect("mongodb://127.0.0.1:27017/employee").then(() => {
//   console.log(`Welcome! MongoDb connected Successfully `);
// });

//Live Url at remote server
 try {
  mongoose.connect("mongodb+srv://shashi:shashi@cluster0.wbpxfqm.mongodb.net/?retryWrites=true&w=majority").then(() => {

  console.log(`SHASHI'S SERVER Connected Successfully`);
});

}catch(error){


console.log(error, "SERVER not Connected Yet")
}