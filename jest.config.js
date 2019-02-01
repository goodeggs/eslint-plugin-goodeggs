const stringToBoolean = (val) => {
  if (val == null) {
    return false;
  }

  if (typeof val !== 'string') {
    throw new Error(`Cannot parse value "${val}" (expected a string but received a ${typeof val})`);
  }

  switch (val.trim().toLowerCase()) {
    case '1':
    case 'true':
      return true;
    case '0':
    case 'false':
      return false;
  }

  throw new Error(`Could not parse unexpected value "${val}" as a boolean`);
};

/**
 * Jest configuration for unit tests.
 *
 * Coverage reporting is automatically enabled in CI environments; enable it locally by setting
 * `COVERAGE=true`.
 */
module.exports = {
  collectCoverage: stringToBoolean(process.env.CI) || stringToBoolean(process.env.COVERAGE),
  collectCoverageFrom: ['**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: [
    // Ignore configuration files (e.g. jest.config.js, webpack.config.js, )
    '<rootDir>/.+\\.config(\\.babel)?\\.js',
    // Ignore rc files (e.g. .prettierrc.js, .eslintrc.js, etc.)
    '<rootDir>/\\..+rc\\.js',
    // Ignore coverage report support files
    '<rootDir>/coverage/',
    // Ignore compiled source
    '<rootDir>/lib/',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: ['**/?(*.)test.!(*.){js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  watchPathIgnorePatterns: ['<rootDir>/lib'],
};
