import {extensions} from '../globs';

export default {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    // TODO(ndhoule): This is a good rule, but it's difficult to use in repositories that use a
    // combination of Jest and Chai `expect`s. We need to develop an easier migration path for
    // assertions before we can turn this on globally. In the meantime, Flow and TS generally catch
    // invalid assertions.
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
