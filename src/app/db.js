const mongoose = require("mongoose");
const util = require("util");

// config should be imported before importing any other file
const config = require("./config");

const debug = require("debug")("jag-express-mongo-mvc-v2:index");

// make bluebird default Promise
Promise = require("bluebird"); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = config.mongo.host;

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.mongooseDebug) {
  mongoose.set("debug", (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

function init() {
  mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
}
module.exports = { init };
