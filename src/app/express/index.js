const express = require("express");

const config = require("../config");

const apiRoutes = require("./api.route");
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
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}
module.exports = { app, init };
