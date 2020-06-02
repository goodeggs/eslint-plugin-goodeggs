# eslint-plugin-goodeggs

A shared ESLint plugin and configurations used by Good Eggs projects.

## Installation

1. Install the plugin via `yarn add --dev eslint-plugin-goodeggs`

2. Install all of the peer dependencies listed in [`package.json#peerDependencies`](package.json), making sure you satisfy the peer dependencies fully by using the specified package version ranges.

3. Create an ESLint configuration file at `.eslintrc.js`:

```js
module.exports = {
  extends: ['plugin:goodeggs/recommended'],
};
```

If your project uses Jest or Mocha, or is written in TypeScript, you'll want to add additional presets to the `extends` array.  See [`src/config/index.js`](src/config/index.js) for a full list of configurations.

4. Install our shared Prettier configuration via `yarn add --dev @goodeggs/prettier-config` and create a Prettier configuration file at `.prettierrc.js`

```js
module.exports = require('@goodeggs/prettier-config');
```

5. Add linting scripts to your project's `package.json`:

```js
"scripts": {
  "lint": "yarn run lint:base .",
  "lint:base": "eslint --ext .js,.jsx,.ts,.tsx --cache --report-unused-disable-directives",
  "lint:fix": "yarn run lint:fix:base .",
  "lint:fix:base": "yarn run lint:base --fix"
}
```

### Editor Plugins

You'll likely want to enable an [ESLint editor integration](https://eslint.org/docs/user-guide/integrations) for your editor so your code is automatically formatted on save.

### Use With `lint-staged`

Consider using this setup in conjunction with [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky) to ensure that linting is run on staged files prior to commit.

For example, the following configuration files will run lint and fix any fixable errors prior to commit:

```js
// lint-staged.config.js
module.exports = {
  '*.{js,jsx,ts,tsx}': 'yarn run lint:fix:base',
};

// .huskyrc.js
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
  },
};
```

## Releasing

To release a new version of this module, use yarn to bump the version in `package.json` and create a
git tag, then push. This will automatically get published to the NPM registry via CI.

```sh
yarn version --new-version=<major|minor|patch|premajor|preminor|prepatch>
git push --follow-tags
```
