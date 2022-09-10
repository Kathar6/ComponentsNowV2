import type { Config } from '@jest/types';

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(css)$': '<rootDir>/tests/__mocks__/fileTransform.ts',
    ".+\\.(scss|png|jpg|svg)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    // aliasses for modules
    "swiper/react": "node_modules/swiper/react/swiper-react.js",
    "swiper/css": "node_modules/swiper/swiper.min.css",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@router/(.*)$": "<rootDir>/src/router/$1",
    "^@views/(.*)$": "<rootDir>/src/views/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/tests/__mocks__/fileMock.ts",
    "\\.(css|less|sss|sass|scss|styl)$": "<rootDir>/tests/__mocks__/styleMock.ts",
    '(assets|models|services)': '<rootDir>/tests/mocks/fileMock.ts'
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTests.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
  testEnvironment: 'jsdom'
};