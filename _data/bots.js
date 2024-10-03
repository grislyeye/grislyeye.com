import EleventyFetch from '@11ty/eleventy-fetch';

export default async () => {
  const robots = await EleventyFetch('https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt', {
    duration: '1d',
    type: 'text'
  });

  return {
    robots
  };
};
