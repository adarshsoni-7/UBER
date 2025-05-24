const UserModel = require("../models/user.model");
const UserService = require("../services/user.service");
const { validationResult } = require("express-validator");


module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    const {fullname, email, password } = req.body;

    const hashPassword = await UserModel.hashPassword(password);

    try {
        const user = await UserService.createUser({ firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashPassword });
        const token = await user.generateAuthToken();
        res.status(201).json({ user, token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

 