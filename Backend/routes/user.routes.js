const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const UserController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("fullname.firstname").isLength({ min: 3 }).withMessage("First name is required"),
    body("fullname.lastname").isLength({ min: 3 }).withMessage("Last name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
  ],
  UserController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
  ],
  UserController.login
);

router.get("/profile", authMiddleware, UserController.profile);
router.get("/logout", authMiddleware, UserController.logout);

module.exports = router;
