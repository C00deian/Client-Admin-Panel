const express = require("express");
const router = express.Router();

const ClientController = require('../Controllers/Client')

router
.post('/add', ClientController.CreateClient)
.put("/update/:id", ClientController.UpdateClientDetails)
.delete("/delete/:id", ClientController.RemoveClient)
.get("/getAllList", ClientController.GetAllClientList)
.get("/update/:id", ClientController.FindOneClientList)
.get("/search/:key", ClientController.SearchClient);


//admin-register
router
.post('/admin-register', ClientController.AdminRegister)
.post('/admin-login', ClientController.AdminLogin)

exports.router = router ;