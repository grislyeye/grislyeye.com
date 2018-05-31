const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const marked = require('marked')

module.exports = function (targetPath) {
  const sourcePath = 'posts/' + path.basename(targetPath, '.html') + '.md'
  const markdown = fs.readFileSync(sourcePath, 'utf8')
  return marked(fm(markdown).body)
}
