const Article = require("./article.model");

/**
 * Load article and append to req.
 */
async function load(req, res, next) {
  try {
    const { id } = req.params;
    const article = await Article.get(id);
    req.article = article; // eslint-disable-line no-param-reassign
    return next();
  } catch (error) {
    next(error);
  }
}

/**
 * Get article
 * @returns {Article}
 */
function get(req, res) {
  return res.json(req.article);
}

/**
 * Create new article
 * @property {string} req.body.articlename - The articlename of article.
 * @property {string} req.body.mobileNumber - The mobileNumber of article.
 * @returns {Article}
 */
async function create(req, res, next) {
  try {
    const article = new Article({
      articlename: req.body.articlename,
      mobileNumber: req.body.mobileNumber,
    });
    const savedArticle = await article.save();
    res.json(savedArticle);
  } catch (error) {
    next(error);
  }
}

/**
 * Update existing article
 * @property {string} req.body.articlename - The articlename of article.
 * @property {string} req.body.mobileNumber - The mobileNumber of article.
 * @returns {Article}
 */
async function update(req, res, next) {
  try {
    const article = req.article;
    article.articlename = req.body.articlename;
    article.mobileNumber = req.body.mobileNumber;
    const savedArticle = await article.save();
    res.json(savedArticle);
  } catch (error) {
    next(error);
  }
}

/**
 * Get article list.
 * @property {number} req.query.skip - Number of articles to be skipped.
 * @property {number} req.query.limit - Limit number of articles to be returned.
 * @returns {Article[]}
 */
async function list(req, res, next) {
  try {
    const { limit = 50, skip = 0 } = req.query;
    const articles = await Article.list({ limit, skip });
    res.json(articles);
  } catch (error) {
    next(error);
  }
}

/**
 * Delete article.
 * @returns {Article}
 */
async function remove(req, res, next) {
  try {
    const article = req.article;
    const articles = await article.remove();
    res.json(articles);
  } catch (error) {
    next(error);
  }
}

module.exports = { load, get, create, update, list, remove };
