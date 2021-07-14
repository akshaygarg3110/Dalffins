const passport = require("passport");

const localStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");

const User = mongoose.model("User");

passport.use(
    new localStrategy({ usernameField: "email" }, (username, password, done) => {
        User.findOne({ email: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            else if (!user) {
                return done(null, false,
                    { message: "Email Address is not registered with Dalffins!" });
            }
            else if (!user.verifyPassword(password)) {
                return done(null, false, 
                    { message: "Incorrect password!" });
                }
            else return done(null, user);
        });
    })
);

passport.serializeUser(function(user, done) {
    done(null, user); 
});

passport.deserializeUser(function(user, done) {
    done(null, user); 
});