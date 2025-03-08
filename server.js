const http = require("http");
const app = require("./app");
// const express = require("express");
const port = process.env.PORT || 3000;
// const authMiddleware = require("./middlewares/auth.middleware");

// app.use(express.json()); // For parsing JSON request bodies
// app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

// app.use(express.json());

const server = http.createServer(app);
server.listen(4000);

// server.listen(port, () => {
//   console.log(`server is running on the ${port}`);
// });
