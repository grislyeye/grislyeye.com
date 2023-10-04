const path = require('path');
const eleventyImage = require('@11ty/eleventy-img');

module.exports = (eleventyConfig) => {
  function relativeToInputPath(inputPath, relativeFilePath) {
    const split = inputPath.split('/');
    split.pop();

    return path.resolve(split.join(path.sep), relativeFilePath);
  }

  eleventyConfig.addAsyncShortcode('image', async function imageShortcode(src, alt, widths, sizes, attributes) {
    const formats = ['avif', 'webp', 'auto', 'png'];
    const file = relativeToInputPath(this.page.inputPath, src);
    const metadata = await eleventyImage(file, {
      widths: widths || ['auto'],
      formats,
      outputDir: path.join(eleventyConfig.dir.output, 'img')
    });
    const imageAttributes = {
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async'
    };

    return eleventyImage.generateHTML(metadata, Object.assign(imageAttributes, attributes || {}));
  });

  eleventyConfig.addAsyncShortcode('rawImageUrl', async function imageShortcode(src, width) {
    const formats = ['webp'];
    const file = relativeToInputPath(this.page.inputPath, src);
    const metadata = await eleventyImage(file, {
      widths: width ? [width] : ['auto'],
      formats,
      outputDir: path.join(eleventyConfig.dir.output, 'img')
    });

    return metadata.webp[0].url;
  });
};
