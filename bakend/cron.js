const axios = require('axios')
const cron = require('node-cron');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const userSchema = require("./Model/employee");


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
            "to": "919049174551",
            "type": "template",
            "template": {
                "name": "hello_world",
                "language": {
                    "code": "en_US"
                }
            }

        };

        // Replace 'YOUR_BEARER_TOKEN' with your actual token
        const bearerToken = 'EAANuQX9U2lIBOZC7M3X64ZB87MGvjGkItT7lIEYsDzHGDGwD9FgZCj9ZAXbiQwJZARWpL9bh65ZCkDpcdOCG8YDKyfGVedaSKZBMdyVMtPG7o2mPXmBGRhrkaP3SAADqyWSQnmzTQAGcmvP5sAsmHrDW3olwYou6ZCxUDzK9mN2WQoThpnviqJAGH0VkZBTOBNBQbr8SQo8ey2SX5bqU9V8pd6AZDZD';

        // Define the headers object with the Authorization header
        const headers = {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': "application/json"
        };

        // Make a POST request to the third-party API with headers
        const response = await axios.post("https://graph.facebook.com/v17.0/151336124726364/messages", postData, { headers });

        // Handle the response data here
        const data = response.data;

        console.log(data);
        console.log("Message Sent To WhatsApp Successfully");
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