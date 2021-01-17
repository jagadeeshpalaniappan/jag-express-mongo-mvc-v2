const express = require("express");
const validate = require("express-validation");

const ctrl = require("./controller");
const valdn = require("./validation");

const router = express.Router(); // eslint-disable-line new-cap

router
  .route("/")
  /** GET /api/users - Get list of users */
  .get(ctrl.list)

  /** POST /api/users - Create new user */
  .post(validate(valdn.createUser), ctrl.create);

router
  .route("/:userId")
  /** GET /api/users/:userId - Get user */
  .get(ctrl.get)

  /** PUT /api/users/:userId - Update user */
  .put(validate(valdn.updateUser), ctrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(ctrl.remove);

/** Load user when API with userId route parameter is hit */
router.param("userId", ctrl.load);

module.exports = router;
