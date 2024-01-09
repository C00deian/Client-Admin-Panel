const express = require("express");
const router = express.Router();

const ClientController = require('../Controllers/Client')

router
    .post('/', ClientController.CreateClient)
    .get('/sendEmails/:id',ClientController.SendSms)
    .get('/', ClientController.GetAllClientList)
    .put('/update/:id', ClientController.UpdateClientDetails)
    .get('/:id', ClientController.FindOneClientList)
    .get('/search/:key', ClientController.SearchClient)
    .delete('/:id', ClientController.RemoveClient)




exports.router = router;