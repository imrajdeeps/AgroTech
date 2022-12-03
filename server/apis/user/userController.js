let User = require("./userModel");
let bcrypt = require('bcrypt');

// user signUp
exports.addUser = (req, res) => {
    let formData = req.body
    User.findOne({ userEmail: formData.email }).then(async data => {
        if (data == null) {
            let saltRouds = 10;
            let userObj = new User();
            userObj.userId = await User.countDocuments().exec();
            userObj.userName = formData.name
            userObj.userEmail = formData.email
            userObj.userPhone = formData.phone
            userObj.userAddress = formData.address
            userObj.userPassword = bcrypt.hashSync(formData.password, saltRouds)


            userObj.save().then(udata => {
                res.json({
                    status: 200,
                    success: true,
                    message: "user Register Sucessfully",
                    data: data,
                    udata: udata
                }).catch(err => {
                    res.json({
                        status: 400,
                        success: false,
                        message: "Error in user Register Sucessfully",
                        data: data,
                        udata: udata
                    })
                })
            })
        }
        else {
            res.json({
                status: 400,
                success: false,
                message: "Sorry To Say User Already Exist"
            })
        }
    }).catch(err => {
        res.json({
            status: 400,
            success: false,
            message: "Error in find user",
            data: data,
        })
    })
}


// user login 
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