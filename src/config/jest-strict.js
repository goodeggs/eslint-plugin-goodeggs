import {extensions} from '../globs';

/**
 * Enables all the core rules in the `plugin:goodeggs/jest` config, but also enables style rules and
 * rules that help logical errors in test (e.g. catches tests that include no assertions).
 *
 * Some of these rules will false positive on Chai `expect`s, so this configuration is suitable only
 * for projects that do not have mixed usage of Chai and Jest assertions.
 */
export default {
  plugins: ['goodeggs', 'jest'],
  extends: ['plugin:goodeggs/jest', 'plugin:jest/style'],
  rules: {
    'jest/expect-expect': 'warn',
    'jest/lowercase-name': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/require-tothrow-message': 'error',
    'jest/valid-expect': 'error',
  },
  overrides: [
    // It's generally safe to enable Jest for anything in these directories as they represent
    // Jest-specific conventions.
    {
      files: [
        `**/__mocks__/*.{${extensions.join(',')}}`,
        `**/__tests__/**/*.{${extensions.join(',')}}`,
      ],
      env: {
        jest: true,
      },
    },
  ],
};