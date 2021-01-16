const { Article } = require("./model");
const dao = require("./dao");

/**
 * Load article and append to req.
 */
async function load(req, res, next) {
  try {
    // POPULATE:
    const { id } = req.params;
    // TX:
    req.article = await dao.get(id);
    // RESP:
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
 * Get article list.
 * List the articles in descending order of 'createdAt' timestamp.
 * @property {number} req.query.skip - Number of articles to be skipped.
 * @property {number} req.query.limit - Limit number of articles to be returned.
 * @returns {Article[]}
 */
async function getAll(req, res, next) {
  try {
    // POPULATE:
    const { limit = 50, skip = 0 } = req.query;
    // TX:
    const articles = await dao.getAll({ limit, skip });
    // RESP:
    res.json(articles);
  } catch (error) {
    next(error);
  }
}

/**
 * Create new article
 * @property {string} req.body.articlename - The articlename of article.
 * @property {string} req.body.mobileNumber - The mobileNumber of article.
 * @returns {Article}
 */
async function create(req, res, next) {
  try {
    // POPULATE:
    const { title, description, published, userId } = req.body;
    // TX:
    const savedArticle = await dao.create({
      title,
      description,
      published,
      userId,
    });
    // RESP:
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
    // POPULATE:
    const { title, description, published } = req.body;
    const article = req.article;
    if (title) article.title = title;
    if (description) article.description = description;
    if (published) article.published = published;

    // TX:
    const savedArticle = await dao.update(article);
    // RESP:
    res.json(savedArticle);
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
    // POPULATE:
    const article = req.article;
    // TX:
    const deletedUser = await dao.remove(article);
    // RESP:
    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
}

/**
 * Delete All article.
 * @returns {Article}
 */
async function removeAll(req, res, next) {
  try {
    // TX:
    const deletedUser = await dao.removeAll();
    // RESP:
    res.json({ message: `${deletedUser.deletedCount} records deleted` });
  } catch (error) {
    next(error);
  }
}

module.exports = { load, get, getAll, create, update, remove, removeAll };
