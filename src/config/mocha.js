// https://github.com/lo1tuma/eslint-plugin-mocha
export default {
  plugins: ['mocha'],
  extends: ['plugin:mocha/recommended'],
  rules: {
    // TODO(ndhoule): Enabled in `mocha/recommended`. This is a de facto best practice, but we
    // haven't codified it anywhere; consider enabling this rule.
    'mocha/max-top-level-suites': 'off',
    // Enabled in `mocha/recommended`. This seems overly restrictive and contradicts our best
    // practices, e.g. when configuring default stubs whose behavior individual tests can override,
    // or when stubbing the clock - erroring when the suite happens to currently have only one test
    // seems unnecessary.
    'mocha/no-hooks-for-single-case': 'off',
    // TODO(ndhoule): This rule is great, but it autofix feature is broken in a way that dumps the
    // fixed content at the top of the file, resulting in a syntax error. When it's fixed upstream,
    // re-enable this.
    'mocha/no-mocha-arrows': 'off',
    // Enabled in `mocha/recommended`; contradicts our best practices.
    'mocha/no-setup-in-describe': 'off',
    // Enabled in `mocha/recommended`; contradicts our best practices which dictate that we prefer
    // multiple small/focused hooks over one big one that does many things.
    'mocha/no-sibling-hooks': 'off',
    // Unfortunately, this rule is autofixable, which just removes `.skip`s. This makes it unsafe in
    // existing repositories.
    'mocha/no-skipped-tests': 'off',
    'mocha/no-top-level-hooks': 'error',
    'mocha/no-exclusive-tests': 'error',
  },
};
