module.exports = {
  verbose: true,
  coverageDirectory:'<rootDir>/coverage/',
  testEnvironment:'jsdom',
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/stories.tsx',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  setupFilesAfterEnv: ['jest-extended'],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-file-drop|schema-to-yup)/)',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
};