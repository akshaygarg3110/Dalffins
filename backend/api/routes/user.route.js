//Author: Divyashree Bangalore Subbaraya (B00875916)
const express = require('express')

const router = express.Router();

const userController = require('../controller/user.controller')

const jwtAuth = require('../config/jwt.config')

//Routes for the feature user profile management
router.post('/signUp', userController.signUp);

router.post('/login', userController.login);

router.get('/userProfile/:id', jwtAuth.jwtAuthenticate, userController.userProfile);

router.put('/resetPassword/:id', userController.updateUserPassword);

router.put('/updateProfile/:id', userController.updateUserProfile);

router.delete('/deleteProfile/:id', userController.deleteUserProfile);

router.put('/resetPassword', userController.resetPassword);

router.post('/emailCheck',userController.emailCheck);

module.exports = router;

