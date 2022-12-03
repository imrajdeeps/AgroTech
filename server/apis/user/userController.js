let User = require("./userModel");
let bcrypt = require('bcrypt');

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(data => {

            if (data != null) {
                if (bcrypt.compareSync(data.password, req.body.password)) {

                    data.save()
                    res.json({
                        status: 200,
                        success: true,
                        message: "Login Sucessfully",
                        data: data
                    })
                }
                else {
                    res.json({
                        status: 400,
                        success: false,
                        message: "Invalid Username Password"
                    })
                }
            } else {

                res.json({
                    message: "No User Found",
                    status: 400,
                    succes: false
                })
            }
        })

}