const cheerio = require('cheerio');
const pluginRss = require("@11ty/eleventy-plugin-rss");


module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ "assets" : "/" });

  eleventyConfig.addPassthroughCopy(
    {
      "node_modules/@fortawesome/fontawesome-free": "vendor/fontawesome",
      "node_modules/skeleton-css/css": "vendor/skeleton",
      "node_modules/modern-normalize": "vendor/modern-normalize"
    }
  );

  eleventyConfig.addHandlebarsHelper("reverse", function (arr) {
    arr.reverse();
  });

  eleventyConfig.addHandlebarsHelper("limit", function (arr, limit) {
    arr.splice(limit);
  });

  eleventyConfig.addHandlebarsHelper("preview", function (html) {
    const $ = cheerio.load(html);
    return $('.preview').text();
  });

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("publishedArticles", function(collectionApi) {
    return collectionApi
      .getFilteredByTags("articles")
      .filter(article => !article.data.tags.includes("draft"));
  });

  return {
    dir: {
      input: "./posts"
    }
  };

};
