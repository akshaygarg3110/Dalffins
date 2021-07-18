//Author: Tanuj Sobti (B00864990)

const mongoose = require("mongoose");
const DishSchema = new mongoose.Schema(
  {
    UserID: {
      type: String,
      required: true,
    },
    dishID: {
      type: String,
      required: true,
    },
    dishname: {
      type: String,
      required: true,
    },
    dishRating: {
      type: String,
      required: true,
    },
    dishcost: {
      type: String,
      required: true,
    },
    mealtype: {
      type: String,
      required: true,
    },
    dishstatus:{
      type: String,
      required: true,
    },
    delivery: {
      type: String,
      default: "",
    },
    Image: {
        type: String,
        default: "",
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dish", DishSchema);
