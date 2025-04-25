module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/tests/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!**/node_modules/**"
  ],
  coverageReporters: [
    "text",
    "lcov",
    "html",
    "json-summary"
  ],
  coverageThreshold: {
    global: {
      branches: 45,
      functions: 50,
      lines: 45,
      statements: 45
    }
  },
  bail: false,
  testRunner: "jest-circus/runner"
}; 