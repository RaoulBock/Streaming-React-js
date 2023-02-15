const config = require("../config/config");
const app = require("./express");
const mongoose = require("mongoose");
const debug = require("debug")("server:server");
const https = require("https");
const http = require("http");
const fs = require("fs");

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

/**
 * Get port from environment and store in Express.
 */

// This line is from the Node.js HTTPS documentation.
// var options = {
//   key: fs.readFileSync("/etc/letsencrypt/live/appsuits.org/privkey.pem"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/appsuits.org/fullchain.pem"),
// };

var port = normalizePort(config.port);
app.set("port", port);

/**
 * Create HTTP server.
 */

// var server = https.createServer(options, app);
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

// app.listen(config.port, (err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.info('Server started on port %s.', config.port)
// })
