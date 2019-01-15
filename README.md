# eslint-plugin-goodeggs

A plugin containing ESLint rules specific to Good Eggs.

## Installation

1. `yarn add --dev eslint eslint-plugin-goodeggs`
2. add an `eslintConfig` section to `package.json`:
```json
   "eslintConfig": {
     "plugins": [
       "goodeggs"
     ],
     "extends": [
       "plugin:goodeggs/goodeggs"
     ],
     "env": {
       "node": true
     }
   }
```
3. add linting scripts:
```
   "scripts": {
     "lint": "eslint '**/*.js' --ignore-path .eslintignore",
     "lint:fix": "yarn lint --fix"
   }
```

## Prettier

To enable automatic code formatting via [Prettier](https://prettier.io/), install `eslint-plugin-goodeggs` as described above and follow these directions.

### Installation

Next, install prettier and its eslint plugins:

```sh
yarn add --dev --exact prettier
yarn add --dev eslint-config-prettier eslint-plugin-prettier
```

Next, create a `.prettierrc.js` and use our shared config:

```js
module.exports = require('eslint-plugin-goodeggs/prettier-config');
```

Modify `package.json`'s `eslintConfig#extends` section to disable any ESLint formatting rules and enable linter errors on unformatted code:

```js
"eslintConfig": {
  // ...
  "extends": [
    // ...
    // Note that the order here matters
    "prettier",
    "plugin:prettier/recommended"
  ],
}
```

Next, add formatting to your `package.json`'s scripts field:

```js
"scripts": {
  // ...
  "fmt": "prettier --write --ignore-path .eslintignore '**/*.js' '**/*.jsx' '**/*.yml' '**/*.json' '**/*.md'",
}
```

> Note that here, we're pointing prettier at our existing `.eslintignore` file rather than creating a `.prettierignore` file. This is generally what you
> want, especially when using `eslint-plugin-prettier`--prettier should act as a drop-in replacement for eslint's style rules. If this doesn't work for your
> use case, though, there's nothing wrong with creating a `.prettierignore` file--just know that you'll want to keep it in sync with your `.eslintignore` file.

### Editor Plugins

You'll likely want to enable a [Prettier editor integration](https://prettier.io/docs/en/editors.html) for your editor so your code is automatically formatted on save.

### Recommended to use with `pretty-quick`

* Ensures that code is formatted by prettier prior to commit, regardless of editor settings
* Add as a dev dependency
* Applies `prettier` to staged files
* Use with pre-commit git hook

e.g. in `package.json`

```json
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
}
```
