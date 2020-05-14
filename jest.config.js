const path = require('path')

module.exports = {
  setupFilesAfterEnv: [
    //'@testing-library/jest-dom/extend-expect',
    //path.join(__dirname, 'src/test/setup'),
  ],
  // Clears previous calls but leaves whatever mocked implementations in place
  clearMocks: true,
  // Clears previous mocked implementations but does not restore the real deal
  resetMocks: true,
  // In tests, simply do: 
  //   import stuff from <path from src> 
  // instead of 
  //   import stuff from ../../../src/<path from src>
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
