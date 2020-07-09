// https://github.com/yannickcr/eslint-plugin-react
export default {
  plugins: ['prettier', 'react', 'react-hooks'],
  extends: ['plugin:import/react', 'plugin:react/recommended', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/boolean-prop-naming': 'warn',
    'react/button-has-type': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-no-bind': 'off', // this has been changed to off as a result of this ADR: https://github.com/goodeggs/marketplace-mobile-app/pull/217
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-unsafe': ['warn', {checkAliases: true}],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-unused-state': 'warn', // TODO(ndhoule): Consider making this an error
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off', // We leverage typing via Flow and TypeScript, which are redundant with prop types.
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
};
