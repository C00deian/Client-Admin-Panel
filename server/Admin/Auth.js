
const jwt = require('jsonwebtoken');
const Admin = require('../Admin/Admin')


const authenticate = async (req, res, next) => {

    try {

        const token = req.cookies.jwtoken;
        const varifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await Admin.findOne({ _id: varifyToken._id, "tokens.token": token });


        if (!rootUser) {

            throw new Error("User Not Found !")
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

     next();


    } catch (err) {
        console.log(err);
        res.status(401).json({ error: "Unauthorized: No valid token provided" });
      }



    }





module.exports = authenticate;