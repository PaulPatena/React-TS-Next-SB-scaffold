// jest.config.js
module.exports = {
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "testMatch": ["**/*.test.(ts|tsx)"],
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
