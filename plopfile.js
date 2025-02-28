const getYear = (new Date()).getFullYear();
const getMonth = (new Date()).getMonth() + 1;
const getDay = (new Date()).getDate();

export default (plop) => {
  plop.setHelper('slug', (str) => str.replace(/[\W_]/g, '-').toLowerCase());
  plop.setHelper('date', () => `${ getYear }-${ getMonth.toString().padStart(2, '0') }-${ getDay.toString().padStart(2, '0') }`);

  plop.setGenerator('post', {
    description: 'Create a new post',
    prompts: [{
      type: 'input',
      name: 'title',
      message: 'What\'s the title of your post?'
    }],
    actions: [{
      type: 'add',
      path: 'content/blog/{{slug title}}/{{slug title}}.md',
      templateFile: '_templates/post.md.hbs'
    }]
  });
};
