export default {
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
  parser: '@typescript-eslint/parser',
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
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    camelcase: 'off',
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
  },
  overrides: [
    // Configuration files (e.g. webpack.config.js) that are *not* transpiled through Babel.
    {
      files: ['*.config.js', '.*rc.js'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
