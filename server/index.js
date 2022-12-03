const express = require("express");
const app = express();
const db = require("./config/db");
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/userRoutes")
app.use("/user", userRoutes)

app.listen(3000, function () {
    console.log("Server is running at PORT 3000")
})


app.get("/", function (req, res) {
    res.json({
        message: "welcome to Server",
        status: 200,
        success: true
    })
})