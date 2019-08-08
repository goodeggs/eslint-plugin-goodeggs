import * as globs from '../globs';

export default {
  parser: 'babel-eslint',
  plugins: [
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint',
    // https://github.com/babel/eslint-plugin-babel
    'babel',
    // https://github.com/benmosher/eslint-plugin-import
    'import',
    // https://github.com/wix/eslint-plugin-lodash
    'lodash',
    // https://github.com/prettier/eslint-plugin-prettier
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    // Must be included after eslint:recommended
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // https://github.com/RyanZim/eslint-config-problems
    'problems',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:lodash/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/babel',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        moduleDirectory: [
          'node_modules', // default
          'src', // used by apps like garbanzo
          '.', // used by apps that use the /local_modules pattern
        ],
      },
    },
  },
  env: {
    es6: true,
  },
  rules: {
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'global-require': 'error',
    'guard-for-in': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': ['error', {capIsNewExceptionPattern: '(unionized\\.)?JSONSchemaFactory'}],
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-debugger': 'error',
    'no-div-regex': 'error',
    // Turn this off because `x == null` is the blessed way to refine types in both TS and Flow
    // https://flow.org/en/docs/types/maybe/#toc-refining-maybe-types
    'no-eq-null': 'off',
    'no-fallthrough': 'error',
    'no-implicit-coercion': 'error',
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
    'no-useless-concat': 'error',
    'no-void': 'error',
    'operator-assignment': ['error', 'always'],
    'spaced-comment': ['error', 'always'],

    // @typescript-eslint/eslint-plugin
    // Rules enabled by other plugins that have equivalents in @typescript-eslint/eslint-plugin
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    // Enabled by @typescript-eslint/recommended, conflicts with prettier
    '@typescript-eslint/indent': 'off',
    // We often use empty interfaces for e.g. props factories for React components that don't yet,
    // but will eventually, accept any props.
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // Allow unused arguments prefixed with _. Useful for arity-sensitive functions (e.g. Express
    // middleware).
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-use-before-define': ['error', {functions: false, typedefs: false}],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/promise-function-async': 'error',

    // eslint-plugin-import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-commonjs': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
      },
    ],

    // eslint-plugin-lodash
    'lodash/chaining': ['error', 'always', 2],
    'lodash/import-scope': ['error', 'full'],
    'lodash/matches-prop-shorthand': ['error', 'never'],
    'lodash/matches-shorthand': ['error', 'never'],
    'lodash/path-style': ['error', 'as-needed'],
    'lodash/prefer-constant': 'off',
    'lodash/prefer-flat-map': 'error',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/prefer-matches': 'off',
    'lodash/prefer-noop': 'off',
    'lodash/prefer-over-quantifier': 'off',
    'lodash/prefer-thru': 'off',
    'lodash/preferred-alias': 'error',
    'lodash/prop-shorthand': ['error', 'never'],
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
        '@typescript-eslint/no-var-requires': 'off',
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
