const { validationResult } = require("express-validator");
const captainService = require("../services/captain.service");
const captainModel = require("../models/captain.model");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainExist = await captainModel.findOne({ email });

  if (isCaptainExist) {
    return res.status(400).json({ error: "Captain already exists" });
  }

  const hashPassword = await captainModel.hashPassword(password);

  try {
    const captain = await captainService.createCaptain({firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashPassword,
    vehicle: {color: vehicle.color, plate: vehicle.plate, capacity: vehicle.capacity, vehicleType: vehicle.vehicleType },});

    const token = await captain.generateAuthToken();
    res.status(201).json({ captain, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
