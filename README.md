# eslint-plugin-goodeggs

A plugin containing ESLint rules specific to Good Eggs.

## Installation

1.  `yarn add --dev eslint eslint-plugin-goodeggs`
2.  add an `eslintConfig` section to `package.json`:

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

3.  add linting scripts:

```js
"scripts": {
  "lint": "yarn run lint:src",
  "lint:src": "yarn run lint:src:glob '**/*.{js,jsx,ts,tsx}'",
  "lint:src:glob": "eslint --ignore-path .eslintignore",
  "fmt": "yarn fmt:src",
  "fmt:src": "yarn run fmt:src:glob '**/*.{js,jsx,ts,tsx}'",
  "fmt:src:glob": "eslint --ignore-path .eslintignore --fix"
}
```

4.  ensure lint is run [during CI](https://github.com/goodeggs/best-practices/glob/master/javascript/build-deploy-modules.md#travisyml):

```js
"scripts": {
  "test": "yarn run lint && yarn run test:mocha"
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
  "lint": "yarn run lint:src && yarn run lint:prettier",
  "lint:src": "yarn run lint:src:glob '**/*.{js,jsx,ts,tsx}'",
  "lint:src:glob": "eslint --ignore-path .eslintignore",
  "lint:prettier": "yarn run lint:prettier:glob '**/*.{yml,json,md,gql,graphql,flow}'",
  "lint:prettier:glob": "prettier --ignore-path .eslintignore --list-different",
  "fmt": "yarn run fmt:src && yarn run fmt:prettier",
  "fmt:src": "yarn run fmt:src:glob '**/*.{js,jsx,ts,tsx}'",
  "fmt:src:glob": "eslint --ignore-path .eslintignore --fix",
  "fmt:prettier": "yarn run fmt:prettier:glob '**/*.{yml,json,md,gql,graphql,flow}'",
  "fmt:prettier:glob": "prettier --ignore-path .eslintignore --write"
}
```

> Note that here, we're pointing prettier at our existing `.eslintignore` file rather than creating a `.prettierignore` file. This is generally what you
> want, especially when using `eslint-plugin-prettier`--prettier should act as a drop-in replacement for eslint's style rules. If this doesn't work for your
> use case, though, there's nothing wrong with creating a `.prettierignore` file--just know that you'll want to keep it in sync with your `.eslintignore` file.

### Editor Plugins

You'll likely want to enable a [Prettier editor integration](https://prettier.io/docs/en/editors.html) for your editor so your code is automatically formatted on save.

### Use with `lint-staged`

* Ensure we run `prettier` and any other linters e.g. eslint, stylelint to staged files prior to commit
* Allows us to get instant feedback on style fail prior to push & CI
* Use with pre-commit git hook (see [best practice](https://github.com/goodeggs/best-practices/blob/master/javascript/git-hooks.md))
* Add as a dev dependency
* Good example [`goodeggs-stats`](https://github.com/goodeggs/goodeggs-stats/blob/master/package.json)

e.g. in `package.json`

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "yarn run fmt:src:glob",
    "git add"
  ],
  "*.{yml,json,md,gql,graphql,flow}": [
    "yarn run fmt:prettier:glob",
    "git add"
  ]
}
```
