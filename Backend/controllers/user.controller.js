const userService = require("../services/user.service");
const userModel = require("../models/user.model");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const BlacklistToken = require("../models/blacklistToken.model");
module.exports.signupUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;

  const isAlreadyUser = await userModel.findOne({ email });

  if (isAlreadyUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });

  const token = user.genAuthToken();

  res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = user.genAuthToken();

  res.cookie("token", token);

  res.status(200).json({ user, token });
};

module.exports.getUserprofile = async (req, res) => {
  res.status(200).json(req.user);
};


module.exports.logoutUser = async (req, res) => {
    res.clearCookie("token");
    await BlacklistToken.create({ token: req.cookies.token });
    res.status(200).json({ message: "Logged out successfully" });
}
