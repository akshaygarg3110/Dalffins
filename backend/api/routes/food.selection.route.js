/* Author - Akshay Garg */

const express = require("express");

const router = express.Router();

const foodSelectionController = require("../controller/food.selection.controller");

router.get("/:id", foodSelectionController.getKitchenByOwnerId);

module.exports = router;
