const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const pluginLit = require('@lit-labs/eleventy-plugin-lit');

const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");
const metadata = require("./_data/metadata.js")

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"./public/": "/"
	});

	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// App plugins
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(pluginImages);

	eleventyConfig.addPlugin(pluginLit, {
    componentModules: [
      '_components/my-hero.js',
      '_components/my-nav.js',
      '_components/my-preview.js',
    ],
  });
	eleventyConfig.addWatchTarget("_components/**/*.js");
  eleventyConfig.addPassthroughCopy(
    {
      "_components/": "scripts/components"
    }
  );

  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: metadata.url,
    },
  });

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);

  eleventyConfig.addPassthroughCopy(
    {
      "node_modules/@webcomponents/template-shadowroot": "vendor/@webcomponents/template-shadowroot",
      "node_modules/@lit-labs/ssr-client": "vendor/@lit-labs/ssr-client",
      "node_modules/lit": "vendor/lit",
      "node_modules/@lit": "vendor/@lit",
      "node_modules/lit-element": "vendor/lit-element",
      "node_modules/lit-html": "vendor/lit-html"
    }
  );

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts", "product", "products"].indexOf(tag) === -1);
	});

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify")
		});
	});

  eleventyConfig.addGlobalData("inputDir", "content");

	return {
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",

		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		pathPrefix: "/",
	};
};
