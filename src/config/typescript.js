import recommended from './recommended';

export default {
  overrides: [
    {
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
      parser: '@typescript-eslint/parser',
      files: ['**/*.{ts,tsx}'],
      plugins: [
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      rules: {
        // These are all superseded by better, type-aware @typescript-eslint rules. See
        // https://github.com/typescript-eslint/typescript-eslint/blob/885780d4a2b07e418256b7323d76b18453c14a50/packages/eslint-plugin/README.md#extension-rules.
        camelcase: 'off',
        'no-array-constructor': 'off',
        'no-empty-function': 'off',
        'no-extra-semi': 'off',
        'no-implied-eval': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',

        // This rule is enabled by `eslint-plugin-problems`; we replace it here with
        // `@typescript-eslint/return-await`, which does the same thing as this rule but with better
        // type information.
        'no-return-await': 'off',

        '@typescript-eslint/ban-ts-comment': ['error', {'ts-ignore': 'allow-with-description'}],
        '@typescript-eslint/default-param-last': 'warn',
        // Enabled by @typescript-eslint/recommended, conflicts with prettier
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
            // We don't really want to use `__`, but mongoose has `__v`, GraphQL has `__typename`, etc.
            // So it's more trouble than it's worth to disallow it.
            leadingUnderscore: 'allowSingleOrDouble',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
            // See comment above.
            leadingUnderscore: 'allowSingleOrDouble',
            trailingUnderscore: 'forbid',
          },
          {
            selector: ['typeLike', 'enumMember'],
            format: ['PascalCase'],
          },
          // We follow the React community convention of using PascalCase for all React components,
          // even "functional components", which are actually functions, even though this goes
          // against the more general "use camelCase for functions" rule. Unfortunately, there is no
          // way to configure this exception specifically for React functional components, so just
          // allow both camelCase and PascalCase for all functions :(. See
          // https://github.com/typescript-eslint/typescript-eslint/issues/2607.
          {
            selector: 'function',
            format: ['PascalCase', 'camelCase'],
          },
          // Common exceptions to class/object property camelcase rule.
          {
            selector: ['memberLike'],
            filter: {
              regex: '^(SU|MO|TU|WE|TH|FR|SA)$',
              match: true,
            },
            format: null,
          },
          // Ignore variables destructured from object properties. Either we own the
          // declarations/assignments of the object, in which case the naming-convention rule will be
          // applied elsewhere, or we don't, in which case enforcing a rename is a bit heavy-handed.
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
          // Ignore all naming conventions for literal object properties that _require_ quotes, e.g.
          // `product._id` in a mongoose query.
          {
            selector: 'objectLiteralProperty',
            modifiers: ['requiresQuotes'],
            format: null,
          },
        ],

        '@typescript-eslint/no-array-constructor': 'error',
        // TODO(ndhoule): Enabled by @typescript-eslint/recommended. Discuss whether or not this is
        // worthwhile; I've never had it cause any pain, but perhaps others have?
        '@typescript-eslint/no-empty-function': 'off',
        // We often use empty interfaces for e.g. props factories for React components that don't yet,
        // but will eventually, accept any props.
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-shadow': 'error',
        // TODO(ndhoule): Enabled by @typescript-eslint/recommended. Discuss enabling it permanently.
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': ['error', recommended.rules['no-unused-vars'][1]],
        '@typescript-eslint/no-use-before-define': ['error', {functions: false, typedefs: false}],
        '@typescript-eslint/no-useless-constructor': 'error',
        // This rule is useful, but it duplicates the functionality offered by `import/no-commonjs`.
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/restrict-plus-operands': ['error', {checkCompoundAssignments: true}],
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {allowString: false, allowNumber: false, allowNullableObject: false},
        ],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      },
    },
  ],
};
