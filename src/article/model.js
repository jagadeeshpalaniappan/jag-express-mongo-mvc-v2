const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../app/helpers/APIError");

/**
 * Article Schema
 */
const ArticleSchema = new mongoose.Schema({
  articlename: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    match: [
      /^[1-9][0-9]{9}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
ArticleSchema.method({});

/**
 * Statics
 */
ArticleSchema.statics = {};

/**
 * @typedef Article
 */
const Article = mongoose.model("Article", ArticleSchema);

module.exports = { ArticleSchema, Article };
