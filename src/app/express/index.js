const express = require("express");

const config = require("../config");

const apiRoutes = require("./apiRoutes");
const preMiddlewares = require("./preMiddlewares");
const postMiddlewares = require("./postMiddlewares");

const app = express();

// preMiddlewares: execute before "/api" routes
preMiddlewares(app);

// api: routes
app.use("/api", apiRoutes);

// preMiddlewares: execute after "/api" routes
postMiddlewares(app);

// init: expressApp
function init() {
  app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(
      `EXPRESS:INITIALIZED [PORT=${config.port}] [NODE_ENV=${config.env}]`
    );
  });
}
module.exports = { app, init };
