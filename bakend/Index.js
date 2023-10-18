const express = require("express");
const app = express();
const cors = require('cors')
require("./db/config");
require('./cron');

const ClientController = require('./Controllers/Client')


//PORT
const port = 5000;


//body parser
app.use(cors())
app.use(express.json())


//MVC :  Model-View_Controller

app.post('/add', ClientController.CreateClient)
app.put("/update/:id", ClientController.UpdateClientDetails);
app.delete("/client/:id", ClientController.RemoveClient);
app.get("/getAllList", ClientController.GetAllList)
app.get("/findone", ClientController.FindOneClientList)



app.listen(port, () => {
  console.log(`app listning on port ${port}`);

});

