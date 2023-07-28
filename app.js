//Dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

//app
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const server = http.createServer(app);
const io = socketIO(server);

//socket
require("./app.socket")(io);

//error
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({ status: error.status || 500, message: error.message });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Express.js server is running on port ${PORT}`);
});
