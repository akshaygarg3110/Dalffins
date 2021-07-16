//Author: Divyashree Bangalore Subbaraya (B00875916)
const bodyParser = require('body-parser');

const express = require('express')

const app = express();

const mongoose = require('mongoose');

const cors = require('cors');

const passport = require("passport");

const dbConfig = require('../backend/api/config/mongodb.config');

const routeUser = require("../backend/api/routes/user.route");

const passportConfig = require("../backend/api/config/passport.config");

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(passport.session());

app.use(express.static("public"))

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false, useCreateIndex: true})
    .then(async () => {
        console.log("Successfully connected to dalffins mongoDb database!");
    }).catch(err => {
        console.log('Could not connect to dalffins MongoDB database.');
        process.exit();
    });

//Route user
app.use("/user", routeUser);

module.exports = app;