const express = require('express');
const router = express.Router();
const userController = require("../controller/usercontroller");
const User = require('../model/usersModel');
// router.use(express.json());

router.post("/",userController.user);
router.post("/admin",userController.admin);
router.post("/address",userController.address);
router.post("/menu",userController.menuitam);
router.post("/res", userController.restaurant);
router.post("/payment",userController.payment);
router.post("/delivery",userController.delivery);
router.post("/order",userController.order)


module.exports = router;