const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/create", authMiddleware.authUser, [
    body("pickup").isLength({min: 3}).withMessage("Invalid Pickup Address"),
    body("destination").isLength({min: 3}).withMessage("Invalid Destination Address"),
    body("vehicleType").isString().isIn(["auto", "car", "moto"]).withMessage("Invalid Vehicle Type")    
], rideController.createRide);

module.exports = router;
