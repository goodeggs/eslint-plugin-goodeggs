module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['goodeggs'],
  extends: ['plugin:goodeggs/recommended', 'plugin:goodeggs/jest'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/?(*.)test.!(*.){js,jsx,ts,tsx}'],
      env: {
        jest: true,
      },
    },
    {
      files: ['prettier-config.js'],
      rules: {
        'global-require': 'off',
        'import/no-commonjs': 'off',
      },
    },
  ],
};
