// https://github.com/yannickcr/eslint-plugin-react
export default {
  plugins: ['prettier', 'react'],
  extends: ['plugin:import/react', 'plugin:react/recommended', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
      // TODO(ndhoule): Consider passing `flowVersion` here when flow is installed
      // (https://github.com/yannickcr/eslint-plugin-react#configuration)
    },
  },
  // TODO(ndhoule): Consider enabling these rules:
  //
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md (TypeScript support?)
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md (TypeScript support?)
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  // - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  rules: {
    // TODO(ndhoule): Double-check--does this work with TypeScript? And do we need to pass
    // `settings.flowVersion` to make it work with Flow?
    'react/boolean-prop-naming': 'warn',
    'react/button-has-type': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
    'react/jsx-fragments': 'error',
    'react/jsx-no-bind': 'warn', // TODO(ndhoule): Consider making this an error
    'react/jsx-pascal-case': 'error',
    'react/no-access-state-in-setstate': 'error', // TODO(ndhoule): Consider making this an error
    'react/no-array-index-key': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-children-prop': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-danger': 'warn',
    'react/no-did-mount-set-state': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-did-update-set-state': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-unused-state': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'warn', // TODO(ndhoule): Consider making this an error
    'react/prefer-stateless-function': 'warn', // TODO(ndhoule): Consider making this an error
    'react/prop-types': 'off', // We leverage typing via Flow and TypeScript, which are redundant with prop types.
    'react/self-closing-comp': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
};
