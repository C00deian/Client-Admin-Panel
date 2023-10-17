const express = require("express");
const app = express();
const cors = require('cors')
const port = 5000;
require("./db/config");
require('./CronSchadule');
const userSchema = require("./db/employee");
app.use(cors())
app.use(express.json())



//POST YOUR DATA INTO DB
app.post('/add', async (req, res) => {
  let data = await userSchema.insertMany(req.body)
  res.send(data)
  console.log(data);
})





//UPADATE YOUR DATA 
app.put("/update/:id", async (req, res) => {
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


});

//DELETE YOUR DATA
app.delete("/client/:id", async (req, res) => {
  let data = await userSchema.findByIdAndDelete(req.params.id)
  res.send(data);

});




//FETCH ALL YOUR DATA
app.get("/getAllList", async (req, res) => {
  let find = await userSchema.find()
  res.send(find);
  // console.log(result)
})


// app.get("/findone", async (req, res) => {

//   let find = await userSchema.findone()
//   res.send(find);
//     // console.log(result)
// })

// SORTING DATA IN ASCENDING
app.get("/asending", async (req, res) => {
  try {
    // let persons = await userSchema.find(req.params.id).sort('name');
    let persons = await userSchema.find(req.params.id).sort('age')
    console.log("successfully Updated")
    res.send(persons);
    console.log(persons)
  } catch (error) {
    console.warn("somthing went wrong");
  }
});



app.get("/Increament", async (req, res) => {
  // let incre = await userSchema.find(req.params.id).sort('age')
  console.log("successfully Updated")
  res.send(incre);
})

app.listen(port, () => {
  console.log(`app listning on port ${port}`);

}); 