const express = require("express");
const router = express.Router();

const ClientController = require('../Controllers/Client')

router
    .post('/', ClientController.CreateClient)
    .get('/sendEmails', ClientController.SendSms)
    .get('/', ClientController.GetAllClientList)
    .put('/update/:id', ClientController.UpdateClientDetails)
    .get('/:id', ClientController.FindOneClientList)
    .get('/:key', ClientController.SearchClient)
    .delete('/:id', ClientController.RemoveClient)

//admin-register

    .post('/admin-register', ClientController.AdminRegister)
    .post('/admin-login', ClientController.AdminLogin)

exports.router = router;