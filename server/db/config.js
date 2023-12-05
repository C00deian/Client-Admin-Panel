const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

//Development Url at local host
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`Welcome! MongoDb connected Successfully `);
});


//Live Url at remote server
//  try {
//   mongoose.connect(process.env.BASE_URL).then(() => {

//   console.log(`SHASHI'S SERVER Connected Successfully`);
// });

// }catch(error){


// console.log(error, "SERVER not Connected Yet")
// }