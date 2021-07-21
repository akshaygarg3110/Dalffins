/* Author: Tanuj Sobti (B00864990) */
const express = require('express')

const router = express.Router();

const dishController = require('../controller/dish.controller')

router.post('/adddish', dishController.addDish);

router.get('/getUserDish', dishController.getUserDish);

router.get('/getUserDishById/:id', dishController.getUserDishById);

router.delete('/removedish/:id', dishController.removeDish);

router.put('/updatedish/:id', dishController.updateDish);

module.exports = router;