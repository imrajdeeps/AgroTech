let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    userId: { type: Number, default: 0 },
    userName: { type: String, default: "" },
    userPhone: { type: Number, default: 0 },
    userEmail: { type: String, default: "" },
    userPassword: { type: String, default: "" },
    userAddress:{type:String,default:""},
    
    
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model("User", userSchema);