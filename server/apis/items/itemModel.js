let mongoose  = require("mongoose")

let itemSchema = new mongoose.Schema({
    itemId:{type:Number,default:0},
    itemName:{type:String,default:""},
    itemDesc:{type:String,default:""},
    itemImage:{type:String,default:""},
    itemPrice:{type:Number,default:0},
    
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()},
})

module.exports = mongoose.model("Item",itemSchema)