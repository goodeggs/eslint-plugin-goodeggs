import * as globs from '../globs';

export default {
  parser: 'babel-eslint',
  plugins: ['babel', 'import', 'lodash', 'prettier'],
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
    'new-cap': ['error', {capIsNewExceptions: ['DT_DecoderDataResponse', 'JSONSchemaFactory']}],
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-caller': 'error',
    'no-console': 'warn',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'off', // explicitly turning this off, because `x == null` is the blessed way to refine maybe types with flow: https://flow.org/en/docs/types/maybe/#toc-refining-maybe-types
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
    // TODO(ndhoule): This is an outdated approach, replace it with its new, official equivalents: https://eslint.org/blog/2019/01/future-typescript-eslint
    // Also enable 'prettier/@typescript-eslint' when you do this
    {
      files: ['**/*.{ts,tsx}'],
      parser: 'typescript-eslint-parser',
      // TODO(ndhoule): eslint-plugin-typescript does not include a `recommended` configuration.
      // Borrowed these rules from https://github.com/nzakas/eslint-plugin-typescript/pull/145
      // as a starting point.
      rules: {
        // These rules false-positive on a bunch of TypeScript constructs like types,
        // interfaces, enums, etc. Running `tsc` catches these errors anyway.
        // https://github.com/eslint/typescript-eslint-parser/issues/416
        // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md
        'no-undef': 'off',
        'no-unused-vars': 'off',

        // eslint-plugin-typescript
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/class-name-casing': 'error',
        // FIXME(ndhoule): This rule is great in almost every case except React components (in
        // particular, stateless functional components), which you're forced to annotate in a
        // non-natural way. The recommended way to annotate those components is:
        //
        // const MyComponent: React.SFC<Props> = ({...}: Props): ReactElement<Props> => (...);
        'typescript/explicit-function-return-type': ['error', {allowExpressions: true}],
        'typescript/explicit-member-accessibility': 'error',
        // TypeScript recommends against prefixing interfaces with `I`:
        // https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names
        'typescript/interface-name-prefix': 'off',
        'typescript/member-delimiter-style': 'error',
        'typescript/member-naming': 'error',
        'typescript/member-ordering': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/no-array-constructor': 'error',
        // In practice, we use empty interfaces for React component Props types that we want to
        // use in factories; this rule doesn't really benefit us much.
        'typescript/no-empty-interface': 'off',
        'typescript/no-explicit-any': 'warn',
        'typescript/no-inferrable-types': 'error',
        'typescript/no-namespace': 'error',
        'typescript/no-non-null-assertion': 'error',
        'typescript/no-parameter-properties': 'error',
        'typescript/no-triple-slash-reference': 'error',
        // FIXME(ndhoule): Doesn't work, look into fixing this
        // 'typescript/no-type-alias': [
        //   'error',
        //   {
        //     allowAliases: 'in-unions-and-intersections',
        //     allowCallbacks: 'always',
        //     allowLiterals: 'in-unions-and-intersections',
        //     allowMappedTypes: 'in-unions-and-intersections',
        //   },
        // ],
        'typescript/no-unused-vars': 'error',
        'typescript/no-use-before-define': ['error', {functions: false, typedefs: true}],
        'typescript/no-var-requires': 'error',
        'typescript/prefer-namespace-keyword': 'error',
        'typescript/type-annotation-spacing': 'error',
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
