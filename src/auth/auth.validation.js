const Joi = require("joi");

// POST /api/auth/login
const login = {
  body: {
    username: Joi.string().required(),
    password: Joi.string().required(),
  },
};

module.exports = { login };
