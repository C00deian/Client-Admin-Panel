const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  expiary: String,
  message: String,


});
module.exports = mongoose.model("employee", userSchema);