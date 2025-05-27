const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  const isBlackListedToken = await BlacklistToken.findOne({ token: token });

  if (isBlackListedToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlackListedToken = await BlacklistToken.findOne({ token: token });

  if (isBlackListedToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const captain = await captainModel.findById(decoded.id);

    req.captain = captain;

    return next();
    
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
