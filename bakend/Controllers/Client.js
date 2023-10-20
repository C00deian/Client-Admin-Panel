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
const id = req.params.id
    try {
         await userSchema.findOneAndUpdate({_id:id }, req.body,{new:true})
         res.status(201).json({ message: "client Detail has been updated."});
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

module.exports = {

    CreateClient,
    GetAllList,
    UpdateClientDetails,
    RemoveClient,
    FindOneClientList
}
