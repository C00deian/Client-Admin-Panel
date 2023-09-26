const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  expiary: new Date().toDateString(),
  selectedOption1: String,
  selectedOption2: String,
  selectedOption3: String,
  selectedOption4: String,
  selectedOption5: String,  // Add this state for the select option
  message: String,


});

module.exports = mongoose.model("user", userSchema);