require("dotenv").config();
const express = require("express");
const cors = require('cors');


const app = express();
const port = process.env.PORT;


require('./config/mongoose.config');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/teams.routes')(app);






app.listen(port, () => {
    console.log(`Established connection on port: ${port}`)
});
