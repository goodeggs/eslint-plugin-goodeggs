import {extensions} from '../globs';

export default {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/prefer-spy-on': 'warn',
    'jest/valid-expect': 'off',
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
