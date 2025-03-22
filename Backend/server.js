const http = require("http");
const app = require("./app");
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(4000);

initializeSocket(server);


// server.listen(port, () => {
//   console.log(`server is running on the ${port}`);
// });
