/* Author - Akshay Garg */

const SALT_HASH_ROUNDS = 10;

const mongoose = require("mongoose");

const FoodItemsSchema = mongoose.Schema({
  kitchenName: {
    type: String,
    required: true,
  },
  kitchenImages: {
    type: Array,
    required: true,
  },
  foodItems: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("foodItems", FoodItemsSchema);
