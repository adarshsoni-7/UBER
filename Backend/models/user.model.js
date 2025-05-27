const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");       
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      min: [3, "Firstname must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      min: [3, "Lastname must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, "Password must be at least 8 characters long"],
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.genAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {expiresIn: "24h"});
  return token;
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
