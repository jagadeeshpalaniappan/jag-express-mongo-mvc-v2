const express = require("express");
const userRoutes = require("../../user/routes");
const articleRoutes = require("../../article/routes");
const authRoutes = require("../../auth/routes");

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// mount user routes at /users
router.use("/users", userRoutes);

// mount user routes at /articles
router.use("/articles", articleRoutes);

// mount auth routes at /auth
router.use("/auth", authRoutes);

module.exports = router;
