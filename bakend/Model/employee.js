const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  mobileNo: String,
  expiary: String,
  selectedOption1: String,
  selectedOption2: String,
  selectedOption3: String,
  selectedOption4: String,
  selectedOption5: String,






  is_Payment: { type: Boolean, default: false }
});




module.exports = mongoose.model("employee", userSchema);