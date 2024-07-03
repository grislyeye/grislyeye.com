const { DateTime } = require('luxon');
const esbuild = require('esbuild');

const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginBundle = require('@11ty/eleventy-plugin-bundle');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

const pluginSitemap = require('@quasibit/eleventy-plugin-sitemap');
const pluginLit = require('@lit-labs/eleventy-plugin-lit');
const pluginFavicons = require('eleventy-plugin-gen-favicons');
const pluginSEO = require('eleventy-plugin-seo');
const pluginGoogleFonts = require('eleventy-google-fonts');

const path = require('path');

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
      '_components/my-button.js',
      '_components/my-shares.js'
    ]
  });

  eleventyConfig.on('afterBuild', () => {
    return esbuild.build({
      entryPoints: ['node_modules/@lit-labs/ssr-client/lit-element-hydrate-support.js'],
      bundle: true,
      outfile: '_site/vendor/@lit-labs/ssr-client/lit-element-hydrate-support.js'
    });
  });

  eleventyConfig.on('afterBuild', () => {
    return esbuild.build({
      entryPoints: ['_components/my-components.js'],
      bundle: true,
      outfile: '_site/bundle/my-components.js'
    });
  });

  eleventyConfig.addWatchTarget('_components/**/*.js');

  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: metadata.url
    }
  });

  eleventyConfig.addPlugin(pluginFavicons);
  eleventyConfig.addPlugin(pluginSEO, {
    title: metadata.title,
    description: metadata.description,
    url: metadata.url,
    author: metadata.author.name,
    twitter: 'grislyeye',
    image: '/images/logo.svg',
    options: {
      imageWithBaseUrl: true
    }
  });
  eleventyConfig.addPlugin(pluginGoogleFonts);

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addCollection('publishedPosts', (collectionApi) => {
    return collectionApi
      .getFilteredByTags('posts')
      .filter((post) => !post.data.tags.includes('drafts'));
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginBundle);

  // Production dependencies
  eleventyConfig.addPassthroughCopy(
    {
      'node_modules/@webcomponents/template-shadowroot': 'vendor/@webcomponents/template-shadowroot',
      'node_modules/lit': 'vendor/lit',
      'node_modules/@lit': 'vendor/@lit',
      'node_modules/lit-element': 'vendor/lit-element',
      'node_modules/lit-html': 'vendor/lit-html',
      'node_modules/vellum-monster': 'vendor/vellum-monster',
      'node_modules/@daviddarnes/share-button': 'vendor/@daviddarnes/share-button',
      'node_modules/@micahilbery/share-on-mastodon': 'vendor/@micahilbery/share-on-mastodon'
    }
  );

  eleventyConfig.addFilter('excludeTags', (posts, tags) => {
    return posts.filter((post) => !post.data.tags.some((tag) => tags.includes(tag)));
  });

  eleventyConfig.addPassthroughCopy('content/**/*.{jpg,png}');

  eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(format || 'dd LLLL yyyy');
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addNunjucksFilter('limit', (arr, limit) => arr.slice(0, limit));

  eleventyConfig.addShortcode('backwardSupportPermalinkStem', (page) => {
    return path.dirname(page.filePathStem);
  });

  eleventyConfig.addPassthroughCopy({ './robots.txt': './robots.txt' });

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
