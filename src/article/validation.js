const Joi = require("joi");

// POST /api/articles
const createArticle = {
  body: {
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string(),
    published: Joi.boolean(),
    userId: Joi.string().required(),
  },
};

// UPDATE /api/articles/:id
const updateArticle = {
  body: {
    title: Joi.string().min(3).max(30),
    description: Joi.string(),
    published: Joi.boolean(),
    userId: Joi.string().required(),
  },
  params: {
    id: Joi.string().hex().required(),
  },
};

module.exports = { createArticle, updateArticle };
