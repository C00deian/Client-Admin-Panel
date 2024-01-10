const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const adminSchema = new Schema({
    // Add fields specific to admin users
    username: String,
    Email : String,
    cpassword: String,
    password : String,


  

    // Any other admin-specific fields
});




  //collection creation
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;


