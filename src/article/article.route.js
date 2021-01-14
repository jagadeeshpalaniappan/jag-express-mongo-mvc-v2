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
  .route("/:articleId")
  /** GET /api/articles/:articleId - Get article */
  .get(articleCtrl.get)

  /** PUT /api/articles/:articleId - Update article */
  .put(validate(articleValdn.updateArticle), articleCtrl.update)

  /** DELETE /api/articles/:articleId - Delete article */
  .delete(articleCtrl.remove);

/** Load article when API with articleId route parameter is hit */
router.param("articleId", articleCtrl.load);

module.exports = router;
