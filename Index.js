const express = require("express");
const app = express();

// const mongoose = require('mongoose');
require("./db/config");
const userSchema = require("./db/employee");
app.use(express.json())


//POST YOUR DATA INTO DB
app.post('/add', async(req,res)=>{
  let data = await userSchema.insertMany(req.body)

  res.send(data)
  console.log(data);
})




 
//UPADATE YOUR DATA 
app.put("/update/:id", async (req, res) => {
  let data = await userSchema.findByIdAndUpdate(req.params.id,{
     name: req.body.name,
     email:req.body.email ,
      password:req.body.password , 
      age:req.body.age} )

  res.send(data);


})
//DELETE YOUR DATA
app.delete("/delete/:id", async (req, res) => {
  let data = await userSchema.findByIdAndDelete(req.params.id)
  res.send(data);


});

//    app.delete("/delete/", async (req, res) => {
//      let data = await userSchema.remove({ _id: "641c26ec9bba12aa6f7a7afd"},
// )

// try {
// res.send(data);
// } catch (error) {
// console.log("somthing went wrong")
// }
// });



//FETCH ALL YOUR DATA
app.get("/findall", async (req, res) => {
  let find = await userSchema.find()
  res.send(find);
    console.log(result)
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
    let   persons = await userSchema.find(req.params.id).sort('age')
    console.log("successfully Updated")
    res.send(persons);
    console.log(persons)
  } catch (error) {
    console.warn("somthing went wrong");
  }
});



app.get("/Increament", async ( req ,res ) => {
  let incre = await userSchema.find(req.params.id).sort('age')
  console.log("successfully Updated")
  res.send(incre);
})

app.listen(5000); 