/*! bundles-ejs.js | @author brikcss <https://github.com/brikcss> | @reference https://github.com/brikcss/bundles-ejs */

import ejs from 'ejs'

export default (bundle = {}, bundler = {}) => {
  // Set bundler defaults.
  bundler.options = bundler.options || {}

  // Compile each changed file with EJS and update file content.
  bundle.changed.forEach((file) => {
    bundler.options.filename = file.source.path
    if (bundler.options.context === undefined) bundler.options.context = file.data
    file.content = ejs.render(file.content, file.data, bundler.options)
  })

  // Return bundle.
  return bundle
}
