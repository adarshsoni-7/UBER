const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({firstname, lastname, email, password, color, plate, capacity, vehicleType}) => {
  if (!firstname || !email || !password || !color || !plate || !vehicleType || !capacity) {
    throw new Error("All fields are required");
  }

  const captain = await captainModel.create({
    fullname: {firstname, lastname}, email, password, vehicle: {color, plate, vehicleType,  capacity}});
  return captain;
};
