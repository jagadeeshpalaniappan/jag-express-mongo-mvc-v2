const db = require("./app/db");
const express = require("./app/express");

db.init();
express.init();

module.exports = express.app;
