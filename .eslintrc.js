module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['goodeggs'],
  extends: ['plugin:goodeggs/recommended', 'plugin:goodeggs/jest'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/?(*.)test.!(*.){js,jsx,ts,tsx}'],
      env: {
        jest: true,
      },
    },
  ],
};
