const mongoose = require("mongoose");

/**
 * Article Schema
 */
const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    published: Boolean,
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

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
