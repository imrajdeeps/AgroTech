const router = require("express").Router();
const multer = require("multer");
const path = require("path");
// const upload = multer({ dest: "./server/uploads/" })

// copied code 
let uploadstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file.originalname)
        let extension = path.extname(file.originalname)
        const uniqueSuffix = "agroTech-" + Date.now() + extension;
        cb(null, uniqueSuffix)
    }
})
const uploadv2 = multer({ storage: uploadstorage })
// copied code end 

const itemController = require("../apis/items/itemController")
const userController = require("../apis/user/userController")

// routes
router.post("/addItem", uploadv2.single("pic"), itemController.addItem)
router.get("/showItem", itemController.showItem)
router.post("/login", userController.login)
router.post("/addUser", userController.addUser)



router.get("/", function (req, res) {
    res.json({
        message: "welcome to user Routes",
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