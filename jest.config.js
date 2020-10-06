module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  automock: false,
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  rootDir: "./",
  collectCoverageFrom: [
    "**/src/**",
    "!**/__snapshots__/**",
    "!**/__mocks__/**"
  ],
  testRegex: ".*\\.test.js$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
    "^@mockedApi(.*)$": "<rootDir>/src/mockedApi$1",
    "^@types(.*)$": "<rootDir>/src/types$1",
    "^@theme(.*)$": "<rootDir>/src/designSystemStore.ts$1"
  },
  setupFiles: [
    "./config/jest/setupJest.js"
  ],
  testPathIgnorePatterns: [
    "/__mocks__/"
  ],
  testURL: "http://localhost/"
};