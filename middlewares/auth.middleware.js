const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Auth failed" });
    }

    const isBlacklisted = await userModel.findOne({ token:token });
    if(isBlacklisted){
        return res.status(401).json({ message: "Auth failed" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    }
    catch (error) {
        return res.status(401).json({ message: "Auth failed" });
    }
}




// const config = require("../config/config");

// const verifyToken = (req, res, next) => {
//   const token = req.headers["x-access-token"] || req.headers["authorization"];

//   if (!token) {
//     return res.status(403).send({
//       message: "No token provided!",
//     });
//   }

//   try {
//     const decoded = jwt.verify(token.replace("Bearer ", ""), config.secret);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).send({
//       message: "Unauthorized!",
//     });
//   }
// };

// const authUser = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decoded = jwt.verify(token, config.secret);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Auth failed" });
//   }
// };

// const isDriver = (req, res, next) => {
//   if (req.user && req.user.role === "driver") {
//     next();
//     return;
//   }
//   res.status(403).send({
//     message: "Require Driver Role!",
//   });
// };

// const isRider = (req, res, next) => {
//   if (req.user && req.user.role === "rider") {
//     next();
//     return;
//   }
//   res.status(403).send({
//     message: "Require Rider Role!",
//   });
// };

// module.exports = {
//   authUser,
//   verifyToken,
//   isDriver,
//   isRider,
// };
