var Auth = require('../models/auth.schema.js'),
    bcrypt = require('bcryptjs'),
    colors = require('colors');

module.exports = {
    registerUser : (req,res)=>{
        console.log(req.body, 'req.body'.red)
        var newUser = new Auth(req.body);
        newUser.save(function(err,user){
        if(err){
            console.log(err)
            res.status(403).send(err)
        }else{
            // console.log('register success'.blue);
            // req.session.uid = user._id;
            res.status(200).send(user)
        }
        })
    },
    };