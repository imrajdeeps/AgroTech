const router = require("express").Router()
const userController = require("../apis/items/itemController")

// routes
router.post("/user/addItem", userController.addItem)
// router.post("/user/showItem", userController.showItem)


router.get("/", function (req, res) {
    res.json({
        message: "welcome to admin Routes",
        success: true,
        status: 200
    })
})

module.exports = router;