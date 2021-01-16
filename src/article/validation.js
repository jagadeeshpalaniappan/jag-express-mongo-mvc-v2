const Joi = require("joi");

// POST /api/articles
const createArticle = {
  body: {
    articlename: Joi.string().required(),
    mobileNumber: Joi.string()
      .regex(/^[1-9][0-9]{9}$/)
      .required(),
  },
};

// UPDATE /api/articles/:articleId
const updateArticle = {
  body: {
    articlename: Joi.string().required(),
    mobileNumber: Joi.string()
      .regex(/^[1-9][0-9]{9}$/)
      .required(),
  },
  params: {
    articleId: Joi.string().hex().required(),
  },
};

module.exports = { createArticle, updateArticle };
