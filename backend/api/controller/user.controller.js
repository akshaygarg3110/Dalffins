//Author: Divyashree Bangalore Subbaraya (B00875916)
const passport = require('passport');

const User = require('../model/user.model')

const bcrypt = require("bcryptjs");

module.exports.signUp = (req, res, next) => {

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    });

    user.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            success: 'false',
            message: "Failure to save the data in db!",
            error: err.message
        });
    });
};

module.exports.login = (req, res, next) => {

    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return (
                res.status(400).json({
                    success: 'false',
                    message: "Bad Request",
                    error: err.message
                })
            )
        }
        else if (user) {
            return (
                res.status(200).json({
                    success: "true",
                    message: "Validation success",
                    email: user.email,
                    id: user._id,
                })
            )
        }
        else {
            return (
                res.status(404).json({
                    success: 'false',
                    message: info
                })
            )
        }
    })(req, res, next);
};

module.exports.userProfile = (req, res, next) => {
    User.findById({ _id: req.params.id }, function (err, user) {

        if (!user) {
            return (
                res.status(404).json({
                    success: 'false',
                    message: "user not found!",
                })
            )
        }

        else return (
            res.status(200).json({
                success: "true",
                message: "User found!",
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber
            })
        )
    });
};

module.exports.updateUserPassword = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        await User.findByIdAndUpdate({ _id: req.params.id },
            {
                password: req.body.password
            },
            { returnOriginal: false }, function (err, userProfile) {

                if (err) {
                    return (
                        res.status(400).json({
                            success: 'false',
                            message: "user not registered!"
                        })
                    )
                }
                else if (userProfile) {
                    return (
                        res.status(200).json({
                            success: "true",
                            message: "Update password success",
                        })
                    )
                }
                else {
                    return (
                        res.status(404).json({
                            success: 'false',
                            message: info
                        })
                    )
                }
            })
    }
    catch (error) {
        res.status(400).json({ error })
    } (req, res, next);
};

module.exports.updateUserProfile = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate({ _id: req.params.id },
            {
                $set:
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber
                },
            },
            { returnOriginal: false }, function (err, userProfile) {

                if (err) {
                    return (
                        res.status(400).json({
                            success: 'false',
                            message: "user not registered!"
                        })
                    )
                }
                else if (userProfile) {
                    return (
                        res.status(200).json({
                            success: "true",
                            message: "Update profile success",
                        })
                    )
                }
                else {
                    return (
                        res.status(404).json({
                            success: 'false',
                            message: info
                        })
                    )
                }
            })
    }
    catch (error) {
        res.status(400).json({ error })
    } (req, res, next);
};

module.exports.deleteUserProfile = async (req, res, next) => {

    try {
        await User.findByIdAndDelete({ _id: req.params.id }, function (err, user) {
            if (!user) {
                return (
                    res.status(404).json({
                        success: 'false',
                        message: "user not found!",
                    })
                )
            }

            else {
                return (

                    res.status(200).json({
                        success: "true",
                        message: "User Deleted!",
                    })
                )
            }
        })
    }
    catch (error) {
        res.status(400).json({ error })
    } (req, res, next);
};



module.exports.resetPassword = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
        await User.findOneAndUpdate(
            { email: req.body.email },
            {
                password: req.body.password
            },
            { returnOriginal: false }, function (err, userProfile, info) {

                if (err) {
                    return (
                        res.status(400).json({
                            success: 'false',
                            message: "user not registered!"
                        })
                    )
                }
                else if (userProfile) {
                    return (
                        res.status(200).json({
                            success: "true",
                            message: "Update password success",
                        })
                    )
                }
                else {
                    return (
                        res.status(404).json({
                            success: 'false',
                            message: info
                        })
                    )
                }
            })
    }
    catch (error) {
        res.status(400).json({ error })
    } (req, res, next);
};

module.exports.emailCheck = async (req, res, next) => {

    try {
        await User.findOne(
            { email: req.body.email }, function (err, userProfile, info) {

                if (err) {
                    return (
                        res.status(404).json({
                            success: 'false',
                            message: "Bad request"
                        })
                    )
                }
                else if (userProfile) {
                    return (
                        res.status(200).json({
                            success: "true",
                            message: "Email found success!",
                            email: userProfile.email,
                            id: userProfile._id,
                            firstName: userProfile.firstName
                        })
                    )
                }
                else {
                    return (
                        res.status(400).json({
                            success: 'false',
                            message: info
                        })
                    )
                }
            })
    }
    catch (error) {
        res.status(400).json({ error })
    } (req, res, next);
};
