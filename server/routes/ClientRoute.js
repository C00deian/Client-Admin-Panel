const express = require("express");
const router = express.Router();

const ClientController = require('../Controllers/Client')

router
    .post('/', ClientController.CreateClient)
    .get('/', ClientController.GetAllClientList)
    .put('/:id', ClientController.UpdateClientDetails)
    .get('/:id', ClientController.FindOneClientList)
    .get('/:key', ClientController.SearchClient)
    .delete('/:id', ClientController.RemoveClient)

//admin-register

    .post('/admin-register', ClientController.AdminRegister)
    .post('/admin-login', ClientController.AdminLogin)

exports.router = router;