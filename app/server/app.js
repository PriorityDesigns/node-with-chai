const isProd = process.env.NODE_ENV == "prod";

let httpServer;
const express = require('express');
httpServer = require(isProd ? 'https' : 'http');

const bodyParser = require('body-parser');
const config = require('config');

const userRoutes = require('./api/userRoutes');

const app = express();
const port = process.env.PORT || config.serverPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);

console.log("Build: " + process.env.NODE_ENV + ", " + isProd);

const server = httpServer.createServer({}, app);

// listen for requests
if(!module.parent) {
  server.listen(port, () => {
      console.log('Started on port: ' + port);
  });
}

module.exports = app; // for testing
