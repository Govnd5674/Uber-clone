const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  console.log("Received Body:", req.body);


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  console.log("Received Body:", req.body);

  const { fullname, email, password } = req.body;  

  // const { firstName, lastName, Email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword
});


if (typeof user.generateAuthToken !== "function") {
  return res.status(500).json({ message: "Token generation failed: Missing method" });
}

const token = user.generateAuthToken();
    res.status(201).json({ token, user });
}
