import * as globs from '../globs';

export default {
  parser: '@babel/eslint-parser',
  plugins: [
    // https://github.com/babel/eslint-plugin-babel
    'babel',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    'eslint-comments',
    // https://github.com/benmosher/eslint-plugin-import
    'import',
    // https://github.com/wix/eslint-plugin-lodash
    'lodash',
    // https://github.com/prettier/eslint-plugin-prettier
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn',
  ],
  extends: [
    'eslint:recommended',
    // https://github.com/RyanZim/eslint-config-problems
    'problems',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:lodash/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
  },
  rules: {
    /*
     * Built-in rules
     */
    camelcase: 'error',
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'eol-last': ['error', 'always'],
    'global-require': 'error',
    'guard-for-in': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': ['error', {capIsNewExceptionPattern: '(unionized\\.)?JSONSchemaFactory'}],
    'no-alert': 'error',
    'no-await-in-loop': 'off',
    'no-constructor-return': 'error',
    'no-debugger': 'error',
    'no-div-regex': 'error',
    // Turn this off because `x == null` is the blessed way to refine types in both TS and Flow
    // https://flow.org/en/docs/types/maybe/#toc-refining-maybe-types
    'no-eq-null': 'off',
    'no-fallthrough': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-loop-func': 'error',
    'no-mixed-requires': ['error', {grouping: true}],
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-return-assign': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sync': 'error',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    // Allow unused arguments and variables prefixed with _. Useful for arity-sensitive functions
    // (e.g. Express middleware).
    'no-unused-vars': [
      'error',
      // Ignore unused variable names starting with `_` followed by anything (but not just `_`,
      // since that's usually lodash).
      {varsIgnorePattern: '^_.+', argsIgnorePattern: '^_', caughtErrors: 'all'},
    ],
    'no-useless-concat': 'error',
    'no-void': 'error',
    'operator-assignment': ['error', 'always'],
    // TODO(ndhoule): eslint-plugin-problems defines this as a problem, but lower it to a warn for
    // now to give consumers time to update their code.
    'prefer-object-spread': 'warn',
    // This rule is part of the `eslint:recommended` ruleset, but will soon be removed because it
    // reports false positives.
    // https://github.com/eslint/eslint/issues/11899#issuecomment-541714523
    'require-atomic-updates': 'off',
    'spaced-comment': ['error', 'always'],

    /*
     * eslint-plugin-eslint-comments
     */
    // Allow `eslint-disable`s at the top of a file, but prevent users from forgetting to close an
    // `eslint-disable` in the middle of a file. We should consider whether or not we actually want
    // to allow whole-file `eslint-disable`s, but in practice we do it frequently for sometimes-
    // legitimate reasons.
    'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
    // Restrict the use of eslint directives in files. ESLint rules should be specified in the
    // ESLint configuration as much as possible; this prevents, for example, users from changing
    // rules for a specific file (e.g. `/* eslint no-undef: warn */`), but allows users to disable
    // rules for a region of a file.
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
          // Eventually, we should force users to specify all globals in their project's ESLint
          // configuration file(s).
          'global',
          'globals',
        ],
      },
    ],

    /*
     * eslint-plugin-import
     */
    'import/extensions': [
      'error',
      // Ban use of extensions in imports (e.g. `import foo from './bar.js'`), but only for our
      // standard source files. This is because:
      // - the `.json` extension is required, otherwise TypeScript is otherwise unable to resolve those
      // - in frontend apps, we use webpack magic to 'import' assets such as fonts, images, CSS, etc.
      // - there are too many possible extensions for these assets to whitelist explicitly here
      // ... Unfortunately it isn't possible to "only configure" this rule for some extensions.
      // All we can do is _require_ or _ban_ extensions for any given extension. So ban it for our
      // standard source files and require it for everything else, and hope that's reasonable-ish.
      'always',
      globs.extensions.reduce((acc, ext) => ({...acc, [ext]: 'never'}), {}),
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-commonjs': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-useless-path-segments': ['error', {noUselessIndex: true}],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],

    /*
     * eslint-plugin-lodash
     */
    'lodash/chaining': 'off',
    'lodash/import-scope': ['error', 'full'],
    'lodash/matches-prop-shorthand': ['error', 'never'],
    'lodash/matches-shorthand': ['error', 'never'],
    'lodash/path-style': ['error', 'as-needed'],
    'lodash/prefer-compact': 'off',
    'lodash/prefer-constant': 'off',
    'lodash/prefer-flat-map': 'error',
    'lodash/prefer-get': 'off',
    'lodash/prefer-is-nil': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/prefer-matches': 'off',
    'lodash/prefer-noop': 'off',
    'lodash/prefer-over-quantifier': 'off',
    'lodash/prefer-thru': 'off',
    'lodash/prefer-startswith': 'off',
    'lodash/preferred-alias': 'error',
    'lodash/prop-shorthand': ['error', 'never'],
    'lodash/prefer-wrapper-method': 'off',
    'lodash/identity-shorthand': 'off',

    /*
     * eslint-plugin-unicorn
     */
    'unicorn/error-message': 'error',
    'unicorn/expiring-todo-comments': 'warn',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/filename-case': [
      'error',
      {
        // Ideally we would enable PascalCase only for React components somehow, but that would
        // require a reliable pattern to match, so doesn't seem worthwhile.
        cases: {
          snakeCase: true,
          pascalCase: true,
        },
        ignore: [
          // The convention is to use the exact module name as the filename. We don't control NPM
          // module names and they are almost always in kebab-case.
          '\\.d\\.ts$',
        ],
      },
    ],
  },
  overrides: [
    // Configuration files (e.g. webpack.config.js) that are *not* transpiled through Babel.
    {
      files: ['*.config.js', '.*rc.js'],
      env: {
        node: true,
      },
      rules: {
        // Node does not support ES modules; because these files are not transpiled, permit use
        // of `require`. (Ideally prohibit ES6 module syntax, but `eslint-plugin-import` doesn't
        // support this.)
        'global-require': 'off',
        'import/no-commonjs': 'off',
      },
    },

    // Configuration files (e.g. webpack.config.babel.js) that are transpiled through Babel.
    {
      files: ['*.config.babel.js'],
      env: {
        node: true,
      },
    },

    // Project-local scripts.
    {
      files: [`scripts/**/*.{${globs.extensions.join(',')}}`],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
