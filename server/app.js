const express = require("express");
require('dotenv').config()
const app = express();
const cors = require('cors')
require("./db/config");
require('./cron/cron');

const ClientRouter = require('./routes/ClientRoute')


//PORT
const port = process.env.PORT;


//body parser
app.use(cors())
app.use(express.json())
app.use('/Clients', ClientRouter.router);





app.listen(port, () => {
  console.log(`app listning on port ${port}`);

});

