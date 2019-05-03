/*! .jestrc.js | @author brikcss <https://github.com/brikcss> | @reference <https://jest.io> */

module.exports = {
  testMatch: ['**/test/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*']
}
