export default {
  configs: {
    default: {
      plugins: [
        'lodash',
        'import',
        'prettier',
      ],
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:lodash/recommended',
        'prettier',
        'plugin:prettier/recommended',
      ],
      env: {
        es6: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      settings: {
        'import/resolver': {
          // used by eslint-plugin-import rules
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.coffee', '.json'],
            moduleDirectory: [
              'node_modules', // default
              'src', // used by apps like garbanzo
              '.', // used by apps that use the /local_modules pattern
            ],
          },
        },
      },
      rules: {
        'array-bracket-spacing': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', {before: true, after: true}],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
        camelcase: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', {before: false, after: true}],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': 'error',
        eqeqeq: ['error', 'always', {null: 'ignore'}],
        'global-require': 'error',
        'guard-for-in': 'error',
        'handle-callback-err': 'error',
        indent: ['error', 2, {SwitchCase: 1}],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'new-cap': ['error', {capIsNewExceptions: ['DT_DecoderDataResponse', 'JSONSchemaFactory']}],
        'new-parens': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-console': 1,
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-eq-null': 'off', // explicitly turning this off, because `x == null` is the blessed way to refine maybe types with flow: https://flow.org/en/docs/types/maybe/#toc-refining-maybe-types
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-mixed-requires': ['error', {grouping: true}],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
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
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'object-curly-spacing': ['error', 'never'],
        'object-shorthand': 'error',
        'operator-assignment': ['error', 'always'],
        'padded-blocks': ['error', 'never'],
        'prefer-const': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', {avoidEscape: true}],
        semi: ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {words: true, nonwords: false}],
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
            'goodeggs/typescript-adjacent-overload-signatures': 'error',
            'goodeggs/typescript-class-name-casing': 'error',
            // FIXME(ndhoule): This rule is great in almost every case except React components (in
            // particular, stateless functional components), which you're forced to annotate in a
            // non-natural way. The recommended way to annotate those components is:
            //
            // const MyComponent: React.SFC<Props> = ({...}: Props): ReactElement<Props> => (...);
            'goodeggs/typescript-explicit-function-return-type': ['error', {allowExpressions: true}],
            'goodeggs/typescript-explicit-member-accessibility': 'error',
            // TypeScript recommends against prefixing interfaces with `I`:
            // https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names
            'goodeggs/typescript-interface-name-prefix': 'off',
            'goodeggs/typescript-member-delimiter-style': 'error',
            'goodeggs/typescript-member-naming': 'error',
            'goodeggs/typescript-member-ordering': 'error',
            'goodeggs/typescript-no-angle-bracket-type-assertion': 'error',
            'goodeggs/typescript-no-array-constructor': 'error',
            // In practice, we use empty interfaces for React component Props types that we want to
            // use in factories; this rule doesn't really benefit us much.
            'goodeggs/typescript-no-empty-interface': 'off',
            'goodeggs/typescript-no-explicit-any': 'warn',
            'goodeggs/typescript-no-inferrable-types': 'error',
            'goodeggs/typescript-no-namespace': 'error',
            'goodeggs/typescript-no-non-null-assertion': 'error',
            'goodeggs/typescript-no-parameter-properties': 'error',
            'goodeggs/typescript-no-triple-slash-reference': 'error',
            // FIXME(ndhoule): Doesn't work, look into fixing this
            // 'goodeggs/typescript-no-type-alias': [
            //   'error',
            //   {
            //     allowAliases: 'in-unions-and-intersections',
            //     allowCallbacks: 'always',
            //     allowLiterals: 'in-unions-and-intersections',
            //     allowMappedTypes: 'in-unions-and-intersections',
            //   },
            // ],
            'goodeggs/typescript-no-unused-vars': 'error',
            'goodeggs/typescript-no-use-before-define': ['error', {functions: false, typedefs: true}],
            'goodeggs/typescript-no-var-requires': 'error',
            'goodeggs/typescript-prefer-namespace-keyword': 'error',
            'goodeggs/typescript-type-annotation-spacing': 'error',
          },
        },

        // Configuration files (e.g. webpack.config.babel.js) that are not transpiled through Babel.
        {
          files: ['*.config{.babel,}.js', '.*rc.js'],
          env: {
            node: true,
          },
          rules: {
            // In pre-Node 10 environments, where import is not available to the runtime, permit the
            // use of `require`.
            // TODO(ndhoule): Check `process.version`; if version >= 10, then do not disable this.
            'goodeggs/import-no-commonjs': 'off',
          },
        },

        // Configuration files (e.g. webpack.config.babel.js) that are transpiled through Babel.
        {
          files: ['*.config{.babel,}.js', '.*rc.js'],
          env: {
            node: true,
          },
        },
      ],
    },

    flow: {
      plugins: ['flowtype'],
      extends: ['plugin:flowtype/recommended'],
      settings: {
        flowtype: {
          onlyFilesWithFlowAnnotation: false,
        },
      },
    },

    jest: {
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },

    mocha: {
      plugins: ['mocha'],
      extends: ['plugin:mocha/recommended'],
    },
  },
};
