const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post( "/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({ min: 2 }).withMessage("First name must be at least 2 characters long"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

module.exports = router;
