const express = require('express');
const app = express();
const cors = require("cors")

const db = require('./models');

app.use(express.json());
app.use(cors());

// Routers

const maintenanceformRouter = require('./routes/Maintenanceform')
app.use( "/Maintenanceform", maintenanceformRouter)

db.sequelize.sync().then(() =>{
app.listen(3001, () => {
    console.log("Hello World");
    });
});
