const express = require("express");
const app = express();
// const axios = require('axios')
const cors = require('cors')
const port = 5000;
// const cron = require('node-cron');
app.use(cors())
// const Employee = require('./db/employee');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require("./db/config");
require('./CronSchadule');

const userSchema = require("./db/employee");
// const { model } = require("mongoose");
app.use(express.json())


const  iscronStart = 1;
// //Call the function to get expired employees
// cron.schedule('* * * * *', () => {

//   if (iscronStart == 0) {
//     console.log("cron is not running.");
//     return 
//   }

//   else {

//     const currentDate = getCurrentDate()


//     SendWhatsApp(777)

//     //   // Replace with the string you want to search for
//     const searchString = currentDate;
//     console.log(`Searching for documents with expiary date: ${currentDate}`);
//     // console.log(searchString);

//     // Write a Mongoose query to find documents containing the string in the specified field
//     userSchema.find({ "expiary": { $regex: new RegExp(searchString, 'i') } })
//       .exec()
//       .then((results) => {
//         const emailData = results.map((user) => ({
//           email: user.email,
//           message: user.message,
//         }))
//         console.log('Matching documents:', results);


//         // If there are matching documents, send an email
//         if (results.length > 0) {
//           const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               user: 'ritikkumarkashyap9@gmail.com',
//               pass: 'mojv gzjs ajbz riex', // Replace with your App Password
//             },
//           });

//           // Email message options
//           emailData.forEach((data) => {

//             const mailOptions = {
//               from: 'ritikkumarkashyap9@gmail.com',
//               to: data.email,
//               subject: 'Payment Reminder',
//               text: data.message,
//             };

//             transporter.sendMail(mailOptions, (error, info) => {
//               if (error) {
//                 console.error('Error sending email:', error);
//               } else {
//                 console.log('Email sent Successfully:', info.response);

//               }
//             });


//           })
//         }
//       })
//       .catch((error) => {
//         console.error('Error querying MongoDB:', error);
//       });

//   }
// });



// async function SendWhatsApp(mobileNo) {

//   try {
//     // Define the data you want to send to the third-party API
//     const postData = {
//       "messaging_product": "whatsapp",
//       "to": "917488692832",
//       "type": "template",
//       "template": {
//         "name": "hello_world",
//         "language": {
//           "code": "en_US"
//         }
//       }

//     };

//     // Replace 'YOUR_BEARER_TOKEN' with your actual token
//     const bearerToken = 'EAAhHPkkcTVUBO3DfuheT8LmRAULaXwRlthIwlOC9pQKYQMg8FBwSsuzPatwZCduAiN4zfUmXRDt52q5Tw0cuPMZCPaQqIaY8lyVt667pJtZAkBG2dsIl3ATduYVgCIYgIkuEmm7SfI5PswlSMYvAlVZAt98xsHV2HP0R4ikPlNMBAmyK2p5aLlVgUBAZBou4ZBRyZAwicSBzWznlRRWNI4ZD';

//     // Define the headers object with the Authorization header
//     const headers = {
//       'Authorization': `Bearer ${bearerToken}`,
//       'Content-Type': "application/json"
//     };

//     // Make a POST request to the third-party API with headers
//     const response = await axios.post('https://graph.facebook.com/v17.0/116356421335248/messages', postData, { headers });

//     // Handle the response data here
//     const data = response.data;

//     console.log(data);
//   } catch (error) {
//     console.log("error ", error)
//   }

// }



//Format the date in "YYYY-MM-DD" format
// function getCurrentDate() {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
//   const day = currentDate.getDate();
//   const edate = `${day}/${month}/${year}`
//   return edate

// }



//POST YOUR DATA INTO DB
app.post('/add', async (req, res) => {
  let data = await userSchema.insertMany(req.body)
  res.send(data)
  console.log(data);
})







//UPADATE YOUR DATA 
app.put("/update/:id", async (req, res) => {
  try {
    let data = await userSchema.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact
    });

    res.send(data)

  }
  catch (err) {
    res.status(401).send("Client not found");

  }


});

//DELETE YOUR DATA
app.delete("/client/:id", async (req, res) => {
  let data = await userSchema.findByIdAndDelete(req.params.id)
  res.send(data);

});




//FETCH ALL YOUR DATA
app.get("/getAllList", async (req, res) => {
  let find = await userSchema.find()
  res.send(find);
  // console.log(result)
})


// app.get("/findone", async (req, res) => {

//   let find = await userSchema.findone()
//   res.send(find);
//     // console.log(result)
// })

// SORTING DATA IN ASCENDING
app.get("/asending", async (req, res) => {
  try {
    // let persons = await userSchema.find(req.params.id).sort('name');
    let persons = await userSchema.find(req.params.id).sort('age')
    console.log("successfully Updated")
    res.send(persons);
    console.log(persons)
  } catch (error) {
    console.warn("somthing went wrong");
  }
});



app.get("/Increament", async (req, res) => {
  // let incre = await userSchema.find(req.params.id).sort('age')
  console.log("successfully Updated")
  res.send(incre);
})

app.listen(port, () => {
  console.log(`app listning on port ${port}`);

}); 