const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const adminSchema = new Schema({
    // Add fields specific to admin users
    username: String,
    Email : String,
    cpassword: String,
    password : String,


    tokens: [

        {
    
          token: {
            type: String,
            require: true
          }
        }
    
      ]

    // Any other admin-specific fields
});



adminSchema.methods.generateAuthToken = async function () {
    try {
  
      const tokenn = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token: tokenn });
      await this.save();
      return tokenn;
  
    }
  
    catch (err) {
      console.log(err)
    }
  
  }

  //collection creation
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;


