const fs = require('fs')
const path = require('path')
const fm = require('front-matter')

module.exports = function (targetPath) {
  const sourcePath = 'posts/' + path.basename(targetPath)
  const markup = fs.readFileSync(sourcePath, 'utf8')
  return fm(markup).body
}
