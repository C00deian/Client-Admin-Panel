const express = require("express");
const app = express();
const cors = require('cors')
require("./db/config");
require('./cron');

const ClientRouter = require('./routes/ClientRoute')


//PORT
const port = 5000;


//body parser
app.use(cors())
app.use(express.json())
app.use('/', ClientRouter.router);






app.listen(port, () => {
  console.log(`app listning on port ${port}`);

});

