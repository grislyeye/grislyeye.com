const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async () => {
  const robots = await EleventyFetch('https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt', {
    duration: '1d',
    type: 'text'
  });

  const ais = await EleventyFetch('https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/ai.txt', {
    duration: '1d',
    type: 'text'
  });

  return {
    robots,
    ais
  };
};
