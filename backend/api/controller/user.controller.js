const passport = require('passport');

const User = require('../model/user.model')

module.exports.signUp= (req, res, next) => {

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        password:req.body.password
    });
    
    user.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            success:'false',
            message: "Failure to save the data in db!",
            error: err.message
        });
    });
};

module.exports.login= (req, res, next) => {

    passport.authenticate('local', function(err,user,info) {  
        if(err) {
            return (
                res.status(400).json({
                    success:'false',
                    message:"Bad Request",
                    error: err.message
                })
            )}
        else if(user){
            return(
                res.status(200).json({
                    success: "true",
                    message: "Validation success",
                    email: user.email
                })
             )}
        else {
            return(
                res.status(404).json({
                    success:'false',
                    message:info
                })
            )}
    })(req,res,next);
};
        





