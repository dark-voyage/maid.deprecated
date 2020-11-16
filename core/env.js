/**
 * @name Process Env Shortener & Loader
 * @description Shorten all env structures and load up .env file if exists
 * @module {process}
 */

require("dotenv").config();

module.exports = process.env;
