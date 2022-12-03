let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    userId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    phone: { type: Number, default: 0 },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model("User", userSchema)

let 