const item = require("./itemModel");

exports.addItem = (req, res) => {
    let itemObj = new item();
    itemObj.itemName = req.body.itemName
    itemObj.itemDesc = req.body.itemDesc
    itemObj.itemPrice = req.body.itemPrice
    
    itemObj.save()
        .then(data => {
            res.json({
                status: 200,
                success: true,
                message: "Item Added Successfully",
                data: data
            })
        })
        .catch(err => {
            res.json({
                status: 400,
                success: false,
                message: "Issue in Add",
                error: err
            })
        })
}

exports.showItem = (req, res) => {
    item.find()
        .then(data => {
            res.json({
                status: 200,
                success: true,
                message: "All Items",
                data: data
            })
        })
        .catch(err => {
            res.json({
                status: 400,
                success: false,
                message: "Issue in find",
                error: err
            })
        })
}

exports.showSingleItem = (req, res) =>{
    let itemObj = new item();
    const itemId = req.params.itemId; 
    item.findOne({_id : itemId})
    .then(data=>{
        res.json({
            status : 200, 
            success : true, 
            message : "Showing Single Item",
            data : data
        })
    })
    .catch(err => {
        res.json({
            status : 400, 
            success : false, 
            message : "There was an error while fetching single item",
            error : err
        })
    })
}

exports.updateItem = (req, res) =>{
    let itemObj = new item();
    item.findOne({_id:req.params.id})
    .then(obj=>{
        if(obj!=null){
            let {itemName, itemDesc, itemPrice} = req.body; 
            obj.itemName = itemName!=undefined ? itemName:obj.taskName
            obj.itemDesc = itemDesc!=undefined ? itemDesc:obj.taskDetail
            obj.itemPrice = itemPrice!=undefined ? itemPrice:obj.endDate
            obj.save()
            .then(data=>{
                res.json({
                    message:"Updated Successfully",
                    status:200,
                    success:true,
                    data:data
                })
            })
            .catch(err=>{
                res.json({
                    message:"Update failed",
                    status:400,
                    success:false,
                    data:err
                })
            })
        }
    })
}


exports.deleteItem = (req, res) =>{
    const itemObj = new item(); 
    const itemId = req.params.itemId; 
    item.findOne({_id : itemId})
    .then(data=>{
        if(data != null){
            item.deleteOne({_id : itemId})
            .then(resolve=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Item deleted Successfully",
                    data : data
                })          
            })
            .catch(err =>{
                res.json({
                    status:200,
                    success:true,
                    message:"Item deleted Successfully",
                    error : err
                }); 
            })
        }
    })
}