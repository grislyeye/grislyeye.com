const { DateTime } = require('luxon');

const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginBundle = require('@11ty/eleventy-plugin-bundle');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

const pluginSitemap = require('@quasibit/eleventy-plugin-sitemap');
const pluginLit = require('@lit-labs/eleventy-plugin-lit');
const pluginReaderBar = require('eleventy-plugin-reader-bar');
const pluginFavicons = require('eleventy-plugin-gen-favicons');
const pluginSEO = require('eleventy-plugin-seo');

const pluginImages = require('./eleventy.config.images.js');
const metadata = require('./_data/metadata.js');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    './public/': '/'
  });

  eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpeg}');

  // App plugins
  eleventyConfig.addPlugin(pluginImages);

  eleventyConfig.addPlugin(pluginLit, {
    componentModules: [
      '_components/my-hero.js',
      '_components/my-nav.js',
      '_components/my-preview.js',
      '_components/my-section.js',
      '_components/my-page.js',
      '_components/my-product.js',
      '_components/my-button.js'
    ]
  });
  eleventyConfig.addWatchTarget('_components/**/*.js');
  eleventyConfig.addPassthroughCopy(
    {
      '_components/': 'scripts/components'
    }
  );

  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: metadata.url
    }
  });

  eleventyConfig.addPlugin(pluginReaderBar);
  eleventyConfig.addPlugin(pluginFavicons);
  eleventyConfig.addPlugin(pluginSEO, {
    title: metadata.title,
    description: metadata.description,
    url: metadata.url,
    author: metadata.author.name,
    twitter: 'grislyeye',
    image: `${ metadata.url }/images/logo.svg`
  });

  // Official plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginBundle);

  eleventyConfig.addPassthroughCopy(
    {
      'node_modules/@webcomponents/template-shadowroot': 'vendor/@webcomponents/template-shadowroot',
      'node_modules/@lit-labs/ssr-client': 'vendor/@lit-labs/ssr-client',
      'node_modules/lit': 'vendor/lit',
      'node_modules/@lit': 'vendor/@lit',
      'node_modules/lit-element': 'vendor/lit-element',
      'node_modules/lit-html': 'vendor/lit-html',
      'node_modules/skeleton-css/css/': 'vendor/skeleton-css',
      'node_modules/vellum-monster': 'vendor/vellum-monster'
    }
  );

  eleventyConfig.addFilter('excludeTags', (posts, tags) => {
    posts.filter((post) => !post.data.tags.some((tag) => tags.includes(tag)));
  });

  eleventyConfig.addPassthroughCopy('content/**/*.{jpg,png}');

  eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
    DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(format || 'dd LLLL yyyy');
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  return {
    templateFormats: [
      'md',
      'njk',
      'html',
      'liquid'
    ],

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'content',
      includes: '../_includes',
      data: '../_data',
      output: '_site'
    },

    pathPrefix: '/'
  };
};
