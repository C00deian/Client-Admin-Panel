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
