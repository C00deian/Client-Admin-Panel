const userSchema = require("../Model/employee");
const Admin = require('../Admin/Admin')
const bcrypt = require("bcrypt");

//POST YOUR DATA INTO DB
const CreateClient = async (req, res) => {
  let data = await userSchema.insertMany(req.body)
  res.send(data)
  console.log(data);

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

    "$or": [

      {
        name: { $regex: req.params.key },
      },
      {
        mobileNo: { $regex: req.params.key },
      }
    ]
  });

  res.send(result);
  // res.status(201).json({ message: "client Detail has been updated." });

}


//ADMIN REGISTRATION
const AdminRegister = async (req, res) => {

  const { username, Email, password, cpassword } = req.body;

  if (!username || !Email ||  !password || !cpassword)

    return res.status(400).json({ error: "Please! fill the blank field" })


  try {



    const UserExists = await Admin.findOne({ Email: Email })



    if (UserExists) {

      return res.status(401).json({ error: "E-mail already Exists" });
    }


    else if (password != cpassword) {

      return res.status(422).json({ error: " Password not matched" });

    }

    else {

      const user = new Admin({ username, Email,  password, cpassword });

      await user.save();


      res.status(201).json({ message: "user Registered Successfully" });

    }

    // secure password before save it into the DB.


  } catch (err) {
    res.status(500).json({ err: "Somthing went Wrong from server!" })
  }


}


//ADMIN LOGIN

const AdminLogin = async (req, res) => {
    try {
      const { Email, password } = req.body;

      if (!Email || !password) {

        return res.status(400).json({ error: "Please fill the Data Properly" });
      }


      const Userlogin = await Admin.findOne({ Email: Email , password:password });

      if (Userlogin) {

        const isMatch =  bcrypt.compare(password, Userlogin.password);

        const token = await Userlogin.generateAuthToken();
        console.log(token);

        // verify jwt jsonwebtoken 
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true
        });
        if (!isMatch) {
          res.status(401).json({ message: " Invalid Login  detail" })


        }
        else {
          res.status(201).json({ message: "User Signin Succesfully" });
        }


      } else {

        return res.status(404).json({ message: " User Not Found" })
      }



    } catch (err) {

      console.error(err);
      res.status(500).json({ error: 'An error occurred during Login. Please try again later.' });
    }
  }
module.exports = {

  CreateClient,
  GetAllClientList,
  UpdateClientDetails,
  RemoveClient,
  FindOneClientList,
  SearchClient,
  AdminRegister,
AdminLogin
}
