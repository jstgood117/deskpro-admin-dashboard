module.exports = {
  verbose: true,
  coverageDirectory:'<rootDir>/coverage/',
  testEnvironment:'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};