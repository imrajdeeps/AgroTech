let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://AgroTech:TeamAgroTech01@agrotech.vubmc98.mongodb.net/agroTech")
.then(data=>{
    console.log("DB Connected")
})
.catch(err=>{
    console.log("Error in DB Connection ", err); 
})