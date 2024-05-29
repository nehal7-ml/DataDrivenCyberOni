/** @type {import('ts-jest').JestConfigWithTsJest} */
const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
  testEnvironmentOptions: {
    url: "http://localhost:3000"
  },

})
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    
}
module.exports = createJestConfig(config)