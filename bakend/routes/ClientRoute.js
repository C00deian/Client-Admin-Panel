const express = require("express");
const router = express.Router();

const ClientController = require('../Controllers/Client')

router
.post('/add', ClientController.CreateClient)
.put("/update/:id", ClientController.UpdateClientDetails)
.delete("/delete/:id", ClientController.RemoveClient)
.get("/getAllList", ClientController.GetAllList)
.get("/findone", ClientController.FindOneClientList);

exports.router = router ;