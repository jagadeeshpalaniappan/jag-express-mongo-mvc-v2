const router = require("express").Router();
const validate = require("express-validation");
const ctrl = require("./controller");
const valdn = require("./validation");

router
  .route("/")
  /** GET /api/articles - Get list of articles */
  .get(ctrl.getAll)

  /** POST /api/articles - Create new article */
  .post(validate(valdn.createArticle), ctrl.create)

  /** DELETE /api/articles - Delete All articles */
  .delete(ctrl.removeAll);

router
  .route("/:id")
  /** GET /api/articles/:id - Get article */
  .get(ctrl.get)

  /** PUT /api/articles/:id - Update article */
  .put(validate(valdn.updateArticle), ctrl.update)

  /** DELETE /api/articles/:id - Delete article */
  .delete(ctrl.remove);

/** Load article when API with id route parameter is hit */
router.param("id", ctrl.load);

module.exports = router;
