//Author: Divyashree Bangalore Subbaraya (B00875916)
const express = require('express')

const router = express.Router();

const userController = require('../controller/user.controller')

router.post('/signUp', userController.signUp);

router.post('/login', userController.login);

router.get('/userProfile/:id', userController.userProfile);

router.put('/resetPassword/:id', userController.updateUserPassword);

router.put('/updateProfile/:id', userController.updateUserProfile);

router.delete('/deleteProfile/:id', userController.deleteUserProfile);

router.put('/resetPassword', userController.resetPassword);

router.post('/emailCheck',userController.emailCheck);

module.exports = router;

