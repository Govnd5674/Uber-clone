const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenSchema = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  console.log("Received Body:", req.body);


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  console.log("Received Body:", req.body);

  const { fullname, email, password } = req.body;  

  const IsUserAlreadyExist = await userModel.findOne({ email });
  if (IsUserAlreadyExist) {
      return res.status(400).json({ errors: [{ msg: "User already exists" 
      }] }); 
      }

//   const { firstName, lastName, Email, password } = req.body;
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


module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({email}).select("+password");
  if (!user) {
      return res.status(401).json({ message: "User not found" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password or Email" });
  }

  const token = user.generateAuthToken();

  res.cookie("token" , token);

  res.status(200).json({ token, user });
}

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blacklistTokenSchema.create({ token });
  res.status(200).json({ message: "Logged out" });
}
 
// module.exports.getUserProfile = async (req, res, next) => {
  
//   res.status(200).json(req.user);
// }