const cheerio = require('cheerio');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const pluginSEO = require("eleventy-plugin-seo");
const favicons = require("eleventy-plugin-gen-favicons");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ "assets" : "/" });
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addPassthroughCopy(
    {
      "node_modules/@fortawesome/fontawesome-free": "vendor/fontawesome",
      "node_modules/skeleton-css/css": "vendor/skeleton",
      "node_modules/modern-normalize": "vendor/modern-normalize",
      "node_modules/vellum-monster": "vendor/vellum-monster"
    }
  );

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("preview", function (html) {
    const $ = cheerio.load(html);
    return $('.preview').text();
  });

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://grislyeye.com",
    },
  });

  eleventyConfig.addPlugin(pluginSEO, {
    title: "The Grisly Eye",
    author: "R.G. Wood",
    url: "https://grislyeye.com",
    twitter: "grislyeye",
    image: "/images/logo.svg",
    options: {
      imageWithBaseUrl: true
    }
  });

  eleventyConfig.addPlugin(favicons);

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
