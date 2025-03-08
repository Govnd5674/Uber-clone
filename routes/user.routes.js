const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
// const authMiddleware = require("../middlewares/auth.middleware");

router.post( "/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({ min: 2 }).withMessage("First name must be at least 2 characters long"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);
// app.delete("/delete-all-users", async (req, res) => {
//   try {
//       await User.deleteMany({}); // Deletes all users
//       res.status(200).json({ message: "All users deleted successfully!" });
//   } catch (error) {
//       console.error("Error deleting users:", error);
//       res.status(500).json({ message: "Internal Server Error" });
//   }
// });

router.delete("/delete-all-users", async (req, res) => {
  try {
    await User.deleteMany({}); // Deletes all users
    res.status(206).json({ message: "All users deleted successfully!" });
  } catch (error) {
    console.error("Error deleting users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
