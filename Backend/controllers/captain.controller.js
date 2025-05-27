const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const BlacklistToken = require("../models/blacklistToken.model");
const { validationResult } = require("express-validator");


module.exports.signupCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname, email, password, vehicle} = req.body;
    
    const isAlreadyCaptain = await captainModel.findOne({ email });
    
    if (isAlreadyCaptain) {
        return res.status(400).json({message: "Captain already exists"});
    }
    const hashPassword = await captainModel.hashPassword(password);
    
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    const token = captain.genAuthToken();
    res.status(201).json({ captain, token });
}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");
    
    if (!captain) {
        return res.status(400).json({message: "Invalid email or password"});
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
        return res.status(400).json({message: "Invalid email or password"});
    }

    const token = captain.genAuthToken();    
    res.cookie("token", token);
    res.status(200).json({captain, token});

    
}

module.exports.getCaptainProfile = async (req, res) => {
    return res.status(200).json(req.captain);

}

module.exports.logoutCaptain = async (req, res) => {
    res.clearCookie("token");
    await BlacklistToken.create({ token: req.cookies.token || req.headers.authorization?.split(" ")[1] });
    res.status(200).json({ message: "Logged out successfully" });

}