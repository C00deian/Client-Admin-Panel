const axios = require('axios')
const cron = require('node-cron');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const userSchema = require("./db/employee");


var iscronStart = 0;  //only testing purpose
//Call the function to get expired employees
cron.schedule('* * * * *', () => {

    if (iscronStart == 0) {
        // console.log("cron is not running.");
        return
    }

    else {


        const currentDate = getCurrentDate()

        SendWhatsApp(777)

        //   // Replace with the string you want to search for
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

    }
});




//Whats App API Schaduling

async function SendWhatsApp(mobileNo) {

    try {
        // Define the data you want to send to the third-party API
        const postData = {
            "messaging_product": "whatsapp",
            "to": "919711812800",
            "type": "template",
            "template": {
                "name": "hello_world",
                "language": {
                    "code": "en_US"
                }
            }

        };

        // Replace 'YOUR_BEARER_TOKEN' with your actual token
        const bearerToken = 'EAAEf48MREagBOZB6Hr7yJtGv8Sf4klPpPXmZAAT1uubqn87YgGHLO3kD6ZBhupBb9DqqO52DAlNPj4N4iV4VGYSdi1z9nABGPvEZBClsEfAFutvrL2dWFb5L3XO8klJTkVFfB73UG7DtUCznknB5qpQQhWxpTLv7F17FEwdj1qIracKlvpthyQGKCersDX92ZCXTJGWjIZCJX2HZBi5l80ZD';

        // Define the headers object with the Authorization header
        const headers = {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': "application/json"
        };

        // Make a POST request to the third-party API with headers
        const response = await axios.post('https://graph.facebook.com/v17.0/116356421335248/messages', postData, { headers });

        // Handle the response data here
        const data = response.data;

        console.log(data);
        console.log("Message Sent To WhatApp Successfully");
    } catch (error) {
        console.log("error", error)
    }

}


//Format the date in "YYYY-MM-DD" format
function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
    const day = currentDate.getDate();
    const edate = `${day}/${month}/${year}`
    return edate

}
