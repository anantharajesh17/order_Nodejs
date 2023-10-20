const express = require('express');
const router = express.Router();
const userController = require("../controller/usercontroller");
const {auth} = require('../middleware/auth');
// router.use(express.json());

router.post("/",userController.user);
router.post("/admin",userController.admin);
router.post("/address",auth,userController.address);
router.post("/menu",userController.menuitam);
router.post("/res", userController.restaurant);
router.post("/payment",userController.payment);
router.post("/delivery",userController.delivery);
router.post("/order",userController.order);
router.get("/getadd",auth,userController.getAddress)


module.exports = router;