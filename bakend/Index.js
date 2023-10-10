const express = require("express");
const app = express();
const cors = require('cors')
const port = 5000;
const cron = require('node-cron');
app.use(cors())
// const Employee = require('./db/employee');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require("./db/config");

const userSchema = require("./db/employee");
// const { model } = require("mongoose");
app.use(express.json())



//Call the function to get expired employees
cron.schedule('* * * * *', () => {
  const currentDate = getCurrentDate()


  // Replace with the string you want to search for
  const searchString = currentDate;
  console.log(`Searching for documents with expiary date: ${currentDate}`);
  // console.log(searchString);

  // Write a Mongoose query to find documents containing the string in the specified field
  userSchema.find({ "expiary": { $regex: new RegExp(searchString, 'i') } })
    .exec()
    .then((results) => {
      const emailData = results.map((user) => ({
        email: user.email,
        message: user.message,
      }))
      console.log('Matching documents:', results);
      // If there are matching documents, send an email
      if (results.length > 0) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'ritikkumarkashyap9@gmail.com',
            pass: 'mojv gzjs ajbz riex', // Replace with your App Password
          },
        });

        // Email message options
        emailData.forEach((data) => {

          const mailOptions = {
            from: 'ritikkumarkashyap9@gmail.com',
            to: data.email,
            subject: 'Payment Reminder',
            text: data.message,
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error sending email:', error);
            } else {
              console.log('Email sent Successfully:', info.response);
           
            }
          });


        })
      }
    })
    .catch((error) => {
      console.error('Error querying MongoDB:', error);
    });


});






//Format the date in "YYYY-MM-DD" format
function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
  const day = currentDate.getDate();
  const edate = `${day}/${month}/${year}`
  return edate

}



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