/* Author - Akshay Garg */

const express = require("express");

const router = express.Router();

const foodSelectionController = require("../controller/food.selection.controller");

// Matches the input url with the uri and call the getKitchenByOwnerId function of foodSelectionController.
router.get("/:id", foodSelectionController.getKitchenByOwnerId);

module.exports = router;
