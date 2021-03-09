const http = require("http");
const app = require("./app");
const config = require("./config/env");

http.globalAgent.maxSockets = Infinity;

const server = http.createServer(app);

// const sockets = require("./sockets/index");
// socket(server);

server.listen(config.port, null, () => {
  console.log(`Backend Server is running on port ${config.port}`);
});

module.exports = server;
