let mongoose = require("mongoose")

mongoose.connect("mongodb+srv://jaspreet:1Jaspreet@student.civhn6j.mongodb.net/p430")
.then(con=>{
    console.log("DB Connected")
})
.catch(err=>{
    console.log("Error in DB Connection")
})