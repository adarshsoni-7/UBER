const UserModel = require("../models/user.model");
const UserService = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlacklistTokenModel = require("../models/blacklistToken.model");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashPassword = await UserModel.hashPassword(password);

  try {
    const user = await UserService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });
    const token = await user.generateAuthToken();
    res.cookie("token", token);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select("+password"); // we set false and while login its necessary to check the password so we set here it to true

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = await user.generateAuthToken();
  res.status(200).json({ user, token });
};

module.exports.profile = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports.logout = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistTokenModel.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
}
