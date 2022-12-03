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
                message: "Item Added Succesfully",
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