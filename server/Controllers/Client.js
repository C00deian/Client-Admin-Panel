const userSchema = require("../Model/employee");


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

module.exports = {

    CreateClient,
    GetAllClientList,
    UpdateClientDetails,
    RemoveClient,
    FindOneClientList,
    SearchClient

}
