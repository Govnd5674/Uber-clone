const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const cookieParser = require("cookie-parser");
const mapsRoutes = require("./routes/maps.routes")
// const authMiddleware = require("./middlewares/auth.middleware");
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use('/maps', mapsRoutes)

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
