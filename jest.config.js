module.exports = {
  "modulePaths": ["/shared/vendor/modules"],
  "moduleFileExtensions": ["js", "jsx"],
  "moduleDirectories": ["node_modules", "bower_components", "shared"],
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
}