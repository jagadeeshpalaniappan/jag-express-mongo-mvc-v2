const httpStatus = require("http-status");
const { Article } = require("./model");
const APIError = require("../app/helpers/APIError");

/**
 * get: article
 */
async function get(id) {
  // TX:
  const article = await Article.findById(id);

  // IF-ERR:
  if (!article)
    throw new APIError("No such article exists!", httpStatus.NOT_FOUND);

  return article;
}

/**
 * Get article list.
 * List the articles in descending order of 'createdAt' timestamp.
 * @property {number} obj.skip - Number of articles to be skipped.
 * @property {number} obj.limit - Limit number of articles to be returned.
 * @returns {Article[]}
 */
async function getAll({ limit, skip }) {
  return Article.find()
    .sort({ createdAt: -1 })
    .skip(+skip)
    .limit(+limit)
    .exec();
}

/**
 * Create new article
 * @property {string} obj.title - The articlename of title.
 * @property {string} obj.description - The description of article.
 * @property {string} obj.published - The published of article.
 * @returns {Article}
 */
async function create(obj) {
  const article = new Article(obj);
  const savedArticle = await article.save();
  return savedArticle;
}

/**
 * Update existing article
 * @property {string} obj.title - The articlename of title.
 * @property {string} obj.description - The description of article.
 * @property {string} obj.published - The published of article.
 * @returns {Article}
 */
async function update(article) {
  const savedArticle = await article.save();
  return savedArticle;
}

/**
 * Delete article.
 * @returns {Article}
 */
async function remove(article) {
  const deletedUser = await article.remove();
  return deletedUser;
}
/**
 * Delete article.
 * @returns {Article}
 */
async function removeAll(article) {
  const deletedUser = await Article.deleteMany({});
  return deletedUser;
}

module.exports = { get, getAll, create, update, remove, removeAll };
