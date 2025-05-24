const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const CaptainController = require("../controllers/captain.controller");


router.post("/register",
    [
    body("fullname.firstname").isLength({min: 3}).withMessage("First name is required"),
    body("fullname.lastname").isLength({min: 3}).withMessage("Last name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
    body("vehicle.color").isLength({min: 3}).withMessage("Color is required"),
    body("vehicle.plate").isLength({min: 3}).withMessage("Plate is required"),
    body("vehicle.capacity").isInt({min: 1}).withMessage("Capacity is required"),
    body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]).withMessage("Invalid vehicle type"),
    
],CaptainController.register);

module.exports = router;