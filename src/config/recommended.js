import {configs as typescriptConfigs} from '@typescript-eslint/eslint-plugin';
import prettierTypescriptConfig from 'eslint-config-prettier/@typescript-eslint';

import * as globs from '../globs';

export default {
  parser: 'babel-eslint',
  plugins: ['@typescript-eslint', 'babel', 'import', 'lodash', 'prettier'],
  extends: [
    'eslint:recommended',
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
      // FIXME(ndhoule): Temporary hack, don't even get me started. This fixes some funky shit
      // around how configs get merged together.
      //
      // tl;dr: This overrides a built-in config distributed with `eslint-plugin-imports`.
      //
      // Once eslint-plugin-imports replaces `typescript-eslint-parser` support with the new parser
      // (`@typescript-eslint/parser`), remove this.
      'typescript-eslint-parser': ['', ''],
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
    camelcase: 'error',
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': ['error', {capIsNewExceptionPattern: '(unionized\\.)?JSONSchemaFactory'}],
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-caller': 'error',
    'no-console': 'warn',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    // Turn this off because `x == null` is the blessed way to refine types in both TS and Flow
    // https://flow.org/en/docs/types/maybe/#toc-refining-maybe-types
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-requires': ['error', {grouping: true}],
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sync': 'error',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'operator-assignment': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'spaced-comment': ['error', 'always'],

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
    // TypeScript files
    {
      files: ['**/*.{ts,tsx}'],
      ...typescriptConfigs.recommended,
      ...prettierTypescriptConfig,
      rules: {
        ...typescriptConfigs.recommended.rules,

        // TypeScript recommends against prefixing interfaces with `I`:
        // https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names
        '@typescript-eslint/interface-name-prefix': 'off',
        // TODO(ndhoule): This rule is great in almost every case except React components (in
        // particular, stateless functional components), which you're forced to annotate in a
        // non-natural way. Better document how to annotate in this case.
        '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}],
        '@typescript-eslint/member-naming': 'error',
        '@typescript-eslint/member-ordering': 'error',
        // In practice, we use empty interfaces for factories that generate props for React
        // components with as-of-yet empty Props types.
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        // TODO(ndhoule): Consider enabling this rule:
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': ['error', {functions: false, typedefs: true}],
        '@typescript-eslint/promise-function-async': 'error',

        ...prettierTypescriptConfig.rules,
      },
    },

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
