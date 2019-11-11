// https://github.com/lo1tuma/eslint-plugin-mocha
export default {
  plugins: ['mocha'],
  extends: ['plugin:mocha/recommended'],
  rules: {
    // TODO(ndhoule): Enabled in `mocha/recommended`. This is a de facto best practice, but we
    // haven't codified it anywhere; consider enabling this rule.
    'mocha/max-top-level-suites': 'off',
    // TODO(ndhoule): This rule is great, but it autofix feature is broken in a way that dumps the
    // fixed content at the top of the file, resulting in a syntax error. When it's fixed upstream,
    // re-enable this.
    'mocha/no-mocha-arrows': 'off',
    // Enabled in `mocha/recommended`; contradicts our best practices.
    'mocha/no-setup-in-describe': 'off',
    // Enabled in `mocha/recommended`; contradicts our best practices which dictate that we prefer
    // multiple small/focused hooks over one big one that does many things.
    'mocha/no-sibling-hooks': 'off',
    'mocha/no-top-level-hooks': 'error',
  },
};
