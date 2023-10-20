const userSchema = require("../Model/employee");


//POST YOUR DATA INTO DB
const CreateClient = async (req, res) => {
    let data = await userSchema.insertMany(req.body)
    res.send(data)
    console.log(data);

}


//FETCH ALL YOUR DATA
const GetAllList = async (req, res) => {
    let find = await userSchema.find()
    res.send(find);
    // console.log(result)

}


//Find One  Client 
const FindOneClientList = async (req, res) => {
    let find = await userSchema.findone()
    res.send(find);
    // console.log(result)
}




//UPADATE YOUR DATA 
const UpdateClientDetails = async (req, res) => {

    try {
         await userSchema.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            contact: req.body.mobileNo,
            expiary: req.body.expiary,
            message: req.body.message,
            selectedOption1: req.body.selectedOption1,
            selectedOption2: req.body.selectedOption2,
            selectedOption3: req.body.selectedOption3,
            selectedOption4: req.body.selectedOption4,
            selectedOption5: req.body.selectedOption5,
        });

        res.status(201).json({ message: "client Detail has been updated."});

    }
    catch (err) {
        res.status(401).send("Client Detail  not found");

    }

}


//DELETE YOUR DATA

const RemoveClient = async (req, res) => {

    let data = await userSchema.findByIdAndDelete(req.params.id)
    res.send(data);
}

module.exports = {

    CreateClient,
    GetAllList,
    UpdateClientDetails,
    RemoveClient,
    FindOneClientList
}
