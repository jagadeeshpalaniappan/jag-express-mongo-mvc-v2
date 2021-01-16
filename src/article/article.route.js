const express = require("express");
const validate = require("express-validation");
const articleCtrl = require("./article.controller");
const articleValdn = require("./article.validation");

const router = express.Router(); // eslint-disable-line new-cap

router
  .route("/")
  /** GET /api/articles - Get list of articles */
  .get(articleCtrl.list)

  /** POST /api/articles - Create new article */
  .post(validate(articleValdn.createArticle), articleCtrl.create);

router
  .route("/:id")
  /** GET /api/articles/:id - Get article */
  .get(articleCtrl.get)

  /** PUT /api/articles/:id - Update article */
  .put(validate(articleValdn.updateArticle), articleCtrl.update)

  /** DELETE /api/articles/:id - Delete article */
  .delete(articleCtrl.remove);

/** Load article when API with id route parameter is hit */
router.param("id", articleCtrl.load);

module.exports = router;
