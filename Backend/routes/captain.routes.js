const express = require("express")
const {body} = require("express-validator")
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");


router.post("/signup", [
    body("fullname.firstname").isLength({min: 3}).withMessage("Firstname must be at least 3 characters long"),
    body("fullname.lastname").isLength({min: 3}).withMessage("Lastname must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({ min: 3 }).withMessage("Plate must be at least 3 characters long"),
    body("vehicle.vehicleType").isLength({min: 3}).withMessage("Vehicle type must be at least 3 characters long"),
    body("vehicle.capacity").isInt({min: 1}).withMessage("Capacity must be at least 1"),
], captainController.signupCaptain);

router.post("/login", [
    body("email").isEmail().withMessage("Invalid email"),    
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
], captainController.loginCaptain);

router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
