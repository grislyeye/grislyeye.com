import path from 'path';
import eleventyImage from '@11ty/eleventy-img';
import markdownIt from 'markdown-it';
import markdownItEleventyImg from 'markdown-it-eleventy-img';

export default async (eleventyConfig) => {
  function relativeToInputPath(inputPath, relativeFilePath) {
    if (relativeFilePath.startsWith('/')) {
      return `./content${ relativeFilePath }`;
    }

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
      decoding: 'async',
      title: alt
    };

    return eleventyImage.generateHTML(metadata, Object.assign(imageAttributes, attributes || {}));
  });

  eleventyConfig.addAsyncShortcode('rawImageUrl', async (post, src, width) => {
    const formats = ['webp'];
    const file = relativeToInputPath(post.inputPath, src);
    const metadata = await eleventyImage(file, {
      widths: width ? [width] : ['auto'],
      formats,
      outputDir: path.join(eleventyConfig.dir.output, 'img')
    });

    return metadata.webp[0].url;
  });

  eleventyConfig
    .setLibrary('md', markdownIt({
      html: true,
      breaks: true,
      linkify: true
    })
      .use(markdownItEleventyImg, {
        imgOptions: {
          widths: [720],
          outputDir: path.join('_site', 'img'),
          formats: ['jpeg', 'png']
        }
      }));
};
