//Author: Divyashree Bangalore Subbaraya (B00875916)
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const passport = require("passport");

const dbConfig = require("../backend/api/config/mongodb.config");

const userRoute = require("../backend/api/routes/user.route");

const helpRoute = require("../backend/api/routes/help.route");

const dishRoute = require("../backend/api/routes/dish.route");

const foodSelectionRoute = require("../backend/api/routes/food.selection.route");

const passportConfig = require("../backend/api/config/passport.config");

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(passport.session());

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(async () => {
    console.log("Successfully connected to dalffins mongoDb database!");
  })
  .catch((err) => {
    console.log("Could not connect to dalffins MongoDB database.");
    process.exit();
  });

//Route user
app.use("/user", userRoute);

//Route help
app.use("/help", helpRoute);

//Route foodSelection
app.use("/foodSelection", foodSelectionRoute);

//Dish Items
app.use("/dish", dishRoute);

//Route order summary and payment
app.use("/summaryAndPayment", payRoute);

module.exports = app;
