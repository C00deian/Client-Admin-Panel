
cron.schedule('* * * * *', () => {
  const currentDate = getCurrentDate();

  // Retrieve expired user emails and messages from the database
  userSchema.find({ expiary: currentDate })
    .exec()
    .then((results) => {
      const emailData = results.map((user) => ({
        email: user.email,
        message: user.message,
      }));

      // Create a transporter with the App Password
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ritikkumarkashyap9@gmail.com',
          pass: 'mojv gzjs ajbz riex', // Replace with your App Password
        },
      });

      // Send emails to each recipient
      emailData.forEach((data) => {
        const mailOptions = {
          from: 'ritikkumarkashyap9@gmail.com',
          to: data.email,
          subject: 'Payment Reminder', // Customize the subject as needed
          text: data.message, // Use the message from the database
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
          } else {
            console.log('Email sent:', info.response);
          }
        });
      });
    })
    .catch((error) => {
      console.error('Error querying MongoDB:', error);
    });
});