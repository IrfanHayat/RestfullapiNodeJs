
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const userModel = require("../Model/data-model");
const userController = require("../Controller/data-model")

router.get('/getUser', userController.getAllUser)


router.post('/postUser', userController.postUserData)

router.patch('/updateUser/:id', userController.updateUserData)

router.delete('/deleteUser/:id', userController.deleteUserData)

module.exports = router;