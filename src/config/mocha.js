// https://github.com/lo1tuma/eslint-plugin-mocha
export default {
  plugins: ['mocha'],
  extends: ['plugin:mocha/recommended'],
  rules: {
    'mocha/handle-done-callback': 'error',
    'mocha/no-async-describe': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-top-level-hooks': 'error',
  },
};
