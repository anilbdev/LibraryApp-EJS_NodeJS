const express = require('express')
const signupRouter = express.Router()
const data = require('../data/user')
signupRouter.get('/', function (req, res) {
    console.log('sign up page>-->')
    res.render('signup', {});
})
signupRouter.post("/", function (req, res) {
    console.log('sign up page post>-->')
    var newuser = {
        "uid": req.body.uid,
        "pwd": req.body.pwd
    };
    console.log(newuser)
    // data.pushToArr(newuser)
    console.log(data.users);
    var newData = data.users
    newData.push(newuser)
    console.log(data.users)
    
    res.redirect("/login")
})
module.exports = signupRouter;