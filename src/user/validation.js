const Joi = require("joi");

// POST /api/users
const createUser = {
  body: {
    username: Joi.string().required(),
    mobileNumber: Joi.string()
      .regex(/^[1-9][0-9]{9}$/)
      .required(),
  },
};

// UPDATE /api/users/:userId
const updateUser = {
  body: {
    username: Joi.string().required(),
    mobileNumber: Joi.string()
      .regex(/^[1-9][0-9]{9}$/)
      .required(),
  },
  params: {
    userId: Joi.string().hex().required(),
  },
};

module.exports = { createUser, updateUser };
