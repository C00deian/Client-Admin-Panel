const userSchema = require('../Model/employee');
const axios = require('axios')
const nodemailer = require('nodemailer');




//POST YOUR DATA INTO DB
const CreateClient = async (req, res) => {
  let data = await userSchema.insertMany(req.body)
  res.send(data)
  // console.log(data);

}


//SEND SMS TO THE CLIENT

const SendSms = async (req, res) => {

  try {

    const id = req.params.id

    // Retrieve user information based on the userId
    const user = await userSchema.findById({ _id: id });

    if (!user || !user.email || !user.message || !user.mobileNo) {
      return res.status(404).json({ error: 'User not found or missing required data' });
    }

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'legalpartners2023@gmail.com',
        pass: 'nmgw melh lusi lmpt', // Replace with your App Password
      },
    });

    const mailOptions = {
      from: 'legalpartners2023@gmail.com',
      to: user.email,
      subject: 'Payment Reminder',
      text: user.message,
    };

    const emailInfo = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', emailInfo.response);

    // Send WhatsApp SMS
    const WapiKey = process.env.WhatsAppApiKey;
    const whatsappApiUrl = `https://api.bulkcampaigns.com/api/wapi/?json=true&apikey=${WapiKey}&mobile=${user.mobileNo}&msg=${user.message}`;

    await axios.get(whatsappApiUrl);
    console.log('WhatsApp SMS sent successfully');

    res.status(200).json({ message: 'Email and WhatsApp SMS sent successfully!' });
  } catch (error) {
    console.error('Error sending messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}




//FETCH ALL YOUR DATA
const GetAllClientList = async (req, res) => {
  try {
    let find = await userSchema.find()
    res.send(find);

  }
  catch (err) {
    console.log(err);
    res.send({ Result: "Clients List Not Found" });

  }
}


//Find One Client Data 

const FindOneClientList = async (req, res) => {
  const id = req.params.id

  try {
    const result = await userSchema.findOne({ _id: id }, req.body, { new: true })
    res.send(result);
  }

  catch (err) {
    console.log(err);
    res.send({ Result: "Client Record not found" });

  }
}




//UPADATE YOUR DATA 
const UpdateClientDetails = async (req, res) => {
  const id = req.params.id

  try {
    await userSchema.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.status(201).json({ message: "Client Detail has been updated." });
  }


  catch (err) {
    console.log(err);
    res.status(401).send("Client Detail  not found");

  }

}



//DELETE YOUR DATA
const RemoveClient = async (req, res) => {
  id = req.params.id;
  let data = await userSchema.findByIdAndDelete(id);
  res.send(data);
}



//SEARCH YOUR DATA
const SearchClient = async (req, res) => {

  let result = await userSchema.find({
    '$or': [

      { "name": { $regex: req.params.key } },
      { "mobileNo": { $regex: req.params.key } }

    ]

  })
  // console.log(req.params.key)
  res.send(result);


}


module.exports = {

  CreateClient,
  GetAllClientList,
  UpdateClientDetails,
  RemoveClient,
  FindOneClientList,
  SearchClient,
  SendSms
}
