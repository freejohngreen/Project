const express = require("express")
const router = express.Router()
const {Maintenanceform} = require("../models")

//This block of code loops through the data base and display the information onto the localhost
router.get(('/'), async (req, res) =>{
    const listOfRequest = await Maintenanceform.findAll();
    res.json(listOfRequest);

});

 router.post("/", async (req, res) =>{
    try{
    const post = req.body;
    await Maintenanceform.create(post);
     res.json(post)
     }
     catch(error)
     {
        res.send(error)
     }
 })


module.exports = router
