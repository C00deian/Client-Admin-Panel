const axios = require('axios');
const nodemailer = require('nodemailer');
const userSchema = require('./employye'); // Adjust the path accordingly

const SendNotifications = async (req, res) => {
  try {
    const results = await userSchema.find({
      $and: [
        { email: { $ne: null } },    // Filter out users with empty email
        { message: { $ne: null } },  // Filter out users with empty message
        { mobileNo: { $ne: null } }  // Filter out users with empty mobileNo
      ]
    }).exec();

    const emailData = results.map((user) => ({
      email: user.email,
      message: user.message,
      mobileNo: user.mobileNo
    }));

    console.log('All documents:', results);

    if (results.length > 0) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ritikkumarkashyap9@gmail.com',
          pass: 'mojv gzjs ajbz riex', // Replace with your App Password
        },
      });

      for (const data of emailData) {
        const mailOptions = {
          from: 'ritikkumarkashyap9@gmail.com',
          to: data.email,
          subject: 'Payment Reminder',
          text: data.message,
        };

//Whats App API key  Provided by kk
 async function sendMessage (message, mobilenumber) {

     const WapiKey = process.env.WhatsAppApiKey


    const whatsappApiUrl = `https://api.bulkcampaigns.com/api/wapi/?json=true&apikey=${WapiKey}&mobile=${mobilenumber}&msg=${message}`;

//     // Make the GET request
    axios.get(whatsappApiUrl).then((response) => {

//         // Handle the API response here
       console.log('Message Sent Successfully:', response.data);
   })
      .catch((error) => {
//          // Handle any errors that occur during the request
          console.error('Error:', error);
      });



 }

        // Call the function to Trigger message and email to the Expire Client
        sendMessage(data.message, data.mobileNo);

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
      }
    } else {
      console.log("No Data Found in the Database");
    }

    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error querying MongoDB or sending emails:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = { SendNotifications };
