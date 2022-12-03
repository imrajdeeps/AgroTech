const router = require("express").Router()
const userController = require("../apis/items/itemController")




router.get("/", function (req, res) {
    res.json({
        message: "welcome to admin Routes",
        success: true,
        status: 200
    })
})

// routes
router.post("/addItem", userController.addItem)
// shows all items
router.get("/showItem", userController.showItem)
// shows single item
router.get("/showSingleItem/:itemId", userController.showSingleItem);

// updates item 
router.post("/updateItem/:id",userController.updateItem); 

// delete item
router.delete("/deleteItem/:itemId", userController.deleteItem); 


module.exports = router;