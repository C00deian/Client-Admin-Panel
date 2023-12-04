const axios = require('axios')
const cron = require('node-cron');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const userSchema = require("../Model/employee");


// var iscronStart = 0;  //only testing purpose
//Call the function to get expired employees

//CRON SCHEDULE ON A SPECIFIC TIME.

// cron.schedule('* * * * *', () => {

//     if (iscronStart == 0) {
//         // console.log("cron is not running.");
//         return
//     }

//     else {

       
//         // sendMessage("hii ritik", 6393654550) static data Only for Testing purpose



//         const currentDate = getCurrentDate()

//         // SendWhatsApp(777)


//         // Replace with the string you want to search for
//         const searchString = currentDate;
//         console.log(`Searching for documents with expiary date: ${currentDate}`);
//         // console.log(searchString);

//         // Write a Mongoose query to find documents containing the string in the specified field
//         userSchema.find({ "expiary": { $regex: new RegExp(searchString, 'i') } })
//             .exec()
//             .then((results) => {
//                 const emailData = results.map((user) => ({
//                     email: user.email,
//                     message: user.message,
//                     mobileNo: user.mobileNo
//                 }))

//                 console.log('Matching documents:', results);


//                 // If there are matching documents, send an email
//                 if (results.length > 0) {
//                     const transporter = nodemailer.createTransport({
//                         service: 'gmail',
//                         auth: {
//                             user: 'ritikkumarkashyap9@gmail.com',
//                             pass: 'mojv gzjs ajbz riex', // Replace with your App Password
//                         },
//                     });

//                     // Email message options
//                     emailData.forEach((data) => {

//                         const mailOptions = {
//                             from: 'ritikkumarkashyap9@gmail.com',
//                             to: data.email,
//                             subject: 'Payment Reminder',
//                             text: data.message,

//                         };

//                         //call the function to Trigger message and email to the Expire Client
//                         sendMessage(data.message, data.mobileNo)

//                         transporter.sendMail(mailOptions, (error, info) => {
//                             if (error) {
//                                 console.error('Error sending email:', error);
//                             } else {
//                                 console.log('Email sent Successfully:', info.response);

//                             }
//                         });


//                     })
//                 }
//                 else {
//                     console.log("No Data Matched With DB");
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error querying MongoDB:', error);
//             });

//     }
// });



      
//IMMEDIATELY CALL FUNCTION A TRIGEER THE MESSAGE 

        // Write a Mongoose query to find documents containing the string in the specified field
        // userSchema.find({})
        // .exec()
        // .then((results) => {
        //     const emailData = results.map((user) => ({
        //         email: user.email,
        //         message: user.message,
        //         mobileNo: user.mobileNo
        //     }));
    
        //     console.log('All documents:', results);
    
        //     // If there are documents, send an email
        //     if (results.length > 0) {
        //         const transporter = nodemailer.createTransport({
        //             service: 'gmail',
        //             auth: {
        //                 user: 'ritikkumarkashyap9@gmail.com',
        //                 pass: 'mojv gzjs ajbz riex', // Replace with your App Password
        //             },
        //         });
    
        //         // Email message options
        //         emailData.forEach((data) => {
        //             const mailOptions = {
        //                 from: 'ritikkumarkashyap9@gmail.com',
        //                 to: data.email,
        //                 subject: 'Payment Reminder',
        //                 text: data.message,
        //             };
    
        //             // call the function to Trigger message and email to the Expire Client
        //             sendMessage(data.message, data.mobileNo);
    
        //             transporter.sendMail(mailOptions, (error, info) => {
        //                 if (error) {
        //                     console.error('Error sending email:', error);
        //                 } else {
        //                     console.log('Email sent successfully:', info.response);
        //                 }
        //             });
        //         });
        //     } else {
        //         console.log("No Data Found in the Database");
        //     }
        // })
        // .catch((error) => {
        //     console.error('Error querying MongoDB:', error);
        // });
    
    






//Whats App API key  Provided by kk
// function sendMessage(message, mobilenumber) {

//     const WapiKey = process.env.WhatsAppApiKey


//     const whatsappApiUrl = `https://api.bulkcampaigns.com/api/wapi/?json=true&apikey=${WapiKey}&mobile=${mobilenumber}&msg=${message}`;

//     // Make the GET request
//     axios.get(whatsappApiUrl).then((response) => {

//         // Handle the API response here
//         console.log('Message Sent Successfully:', response.data);
//     })
//         .catch((error) => {
//             // Handle any errors that occur during the request
//             console.error('Error:', error);
//         });



// }


//Format the date in "YYYY-MM-DD" format
// function getCurrentDate() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
//     const day = currentDate.getDate();
//     const edate = `${day}/${month}/${year}`
//     return edate

// }



