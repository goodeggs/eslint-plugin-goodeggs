/* eslint-disable goodeggs/import-no-commonjs,no-console */
const config = require('@goodeggs/prettier-config');

module.exports = config;

console.warn(
  'WARNING: Loading Prettier configuration from eslint-plugin-goodeggs is deprecated (replaced by @goodeggs/prettier-config) and will be removed in the next major version of eslint-plugin-goodeggs.',
);
