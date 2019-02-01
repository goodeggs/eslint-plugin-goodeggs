export default {
  plugins: ['prettier', 'react'],
  extends: ['plugin:import/react', 'plugin:react/recommended', 'prettier/react'],
  rules: {
    // We leverage typing via Flow and TypeScript, which are redundant with prop types.
    'react/prop-types': 'off',
  },
};
