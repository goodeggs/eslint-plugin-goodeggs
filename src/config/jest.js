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
};
