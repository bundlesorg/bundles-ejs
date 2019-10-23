/*! .lintstagedrc.js | @author brikcss <https://github.com/brikcss> | @reference <https://github.com/okonet/lint-staged> */

module.exports = {
  'lib/bundles-ejs.js': ['npx node-minify --compressor uglify-es --input lib/bundles-ejs.js --output lib/bundles-ejs.min.js', 'git add lib/bundles-ejs.min.js'],
  '!(*.min).js': ['standard --fix', 'git add'],
  '!(*.min).css': ['prettier --parser css --write', 'stylelint', 'git add'],
  '*.json': ['prettier --parser json --write', 'git add'],
  '*.md': ['prettier --parser markdown --write', 'git add']
}
