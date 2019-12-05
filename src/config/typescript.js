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
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      rules: {
        camelcase: 'off',
        'no-empty-function': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        // Enabled by @typescript-eslint/recommended, conflicts with prettier
        '@typescript-eslint/indent': 'off',
        // TODO(ndhoule): Enabled by @typescript-eslint/recommended. Discuss whether or not this is
        // worthwhile; I've never had it cause any pain, but perhaps others have?
        '@typescript-eslint/no-empty-function': 'off',
        // We often use empty interfaces for e.g. props factories for React components that don't yet,
        // but will eventually, accept any props.
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        // TODO(ndhoule): Enabled by @typescript-eslint/recommended. Discuss enabling it permanently.
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': ['error', recommended.rules['no-unused-vars'][1]],
        '@typescript-eslint/no-use-before-define': ['error', {functions: false, typedefs: false}],
        '@typescript-eslint/no-useless-constructor': 'error',
        // This rule is useful, but it duplicates the functionality offered by `import/no-commonjs`.
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/restrict-plus-operands': ['error', {checkCompoundAssignments: true}],
        '@typescript-eslint/restrict-template-expressions': 'error',
      },
    },
  ],
};
