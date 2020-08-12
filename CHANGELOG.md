# vNEXT

- Upgrade @typescript-eslint to [v3.9](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.0.0).

## New rules:

- [`@typescript-eslint/naming-convention (error)`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)
  - Enforces PascalCase for Classes and Interfaces, camelCase for everything else.
  - Disallows capitalization in variable or class names other than the first letter of each segment of the name (Bad: `HTTPAPIHelper`, Good: `HttpApiHelper`).
- [`@typescript-eslint/ban-ts-comment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md#allow-with-description).
  - `@ts-ignore is now allowed as long as there is a comment explaining why it was used.
- [`@typescript-eslint/strict-boolean-expressions` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md).
  - Forbids usage of non-boolean types in expressions where a boolean is expected, including strings, numbers, and nullable objects.
- [`@typescript-eslint/ban-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md).
  - Rule settings have not changed, but the updated version of the rule is more restrictive - `{}` and `Function` types are now disallowed.

<!-- Put changelog messages that haven't yet been released above this! -->

# v10.0.0

- Upgrade to [Prettier 2.0](https://prettier.io/blog/2020/03/21/2.0.0.html). To upgrade, simultaneously upgrade eslint-plugin-goodeggs to v10 and prettier to v2, then run `eslint --fix` (or equivalent command) to reformat given the updated rules.

# v9.0.1

- Disable [`react/no-adjacent-inline-elements` (warn)](https://github.com/yannickcr/eslint-plugin-react/blob/0a717a52730c2a360ba8448e89cd5ac519ad0ee3/docs/rules/no-adjacent-inline-elements.md), which sometimes errors out. I'll look into re-enabling this later.

# v9.0.0

## Removed rules:

- [`@typescript-eslint/ban-ts-ignore` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/ban-ts-ignore.md): Replaced by the newer, stricter `ban-ts-comment` rule. If your code overrides this rule, something like `ag -Q '@typescript-eslint/ban-ts-ignore' -l --print0 | xargs -0 sed -i '' 's|@typescript-eslint/ban-ts-ignore|@typescript-eslint/ban-ts-comment|g'` should fix most instances of it.

## New rules:

- [`react/jsx-no-script-url` (error)](https://github.com/yannickcr/eslint-plugin-react/blob/0a717a52730c2a360ba8448e89cd5ac519ad0ee3/docs/rules/jsx-no-script-url.md)
- [`react/no-adjacent-inline-elements` (warn)](https://github.com/yannickcr/eslint-plugin-react/blob/0a717a52730c2a360ba8448e89cd5ac519ad0ee3/docs/rules/no-adjacent-inline-elements.md)
- [`prefer-object-spread`: (warn)](https://eslint.org/docs/rules/prefer-object-spread) - Warn for now to give consumers time to update their code.
- [`no-unused-vars`: enable `caughtErrors: 'all'` (error)](https://eslint.org/docs/rules/no-unused-vars#caughterrors) - Enforce use of the error parameter in `catch` blocks
- [`@typescript-eslint/ban-ts-comment` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/ban-ts-comment.md)
- [`@typescript-eslint/default-param-last` (warn)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/default-param-last.md)
- [`@typescript-eslint/no-extra-semi` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/no-extra-semi.md)
- [`@typescript-eslint/no-implied-eval` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/no-implied-eval.md)
- [`@typescript-eslint/no-throw-literal` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/no-throw-literal.md)
- [`@typescript-eslint/prefer-as-const` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/prefer-as-const.md)
- [`@typescript-eslint/no-unnecessary-boolean-literal-compare` (error)](https://github.com/typescript-eslint/typescript-eslint/blob/4670aabef31d9017ad302f206b9c2f18d53c8ee4/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)

# v8.1.0

- TypeScript: Replace `no-return-await` with `@typescript/eslint/return-await`
- TypeScript: Prohibit unnecessary non-null assertions (e.g. `foo!!.bar`)
- TypeScript: Prohibit plus operators (`+` and `+=`) on different types (e.g. prhibit adding a string to a number)

# v8.0.0

This is a significant update with several breaking changes.

- No longer bundle third-party eslint plugins in this package; instead, they are now peers, and it's the responsibility of the consumer to install them.
- Revert all namespaced rules to their stock values (e.g. `goodeggs/import-whatever` -> `import/whatever`)
- Rename base shared configuration from `goodeggs` to `recommended` (`plugin:goodeggs/goodeggs` -> `plugin:goodeggs/recommended`)
- Break flowtype configuration into `flowtype` shared config (`plugin:goodeggs/flowtype`)
- Break mocha configuration into `mocha` shared config (`plugin:goodeggs/mocha`)
- Break TypeScript configuration into `typescript` shared config (`plugin:goodeggs/typescript`)
- Break jest configuration into `jest` and `jestStrict` configurations (`plugin:goodeggs/jest` and `plugin:goodeggs/jestStrict`)
- Remove all stylistic rules (covered by `eslint-config-prettier`)
- Add React plugin and enable sane default rules that reflect current best practices and introduce some new ones that prevent common React performance errors.
- Disable new-cap rules for `unionized.JSONSchemaFactory` (previously we only permitted `JSONSchemaFactory`)
- Ops-specific rules:
  - Move ops-specific configuration into its own config (`plugin:goodeggs/ops`)
  - Disable new-cap rules `dryrain(Api).DT_*` invocations
- We no longer configure the linter to find modules in locations other than `node_modules` (e.g. `local_modules` in ops repos, and `src` in Garbanzo). See the migration guide below for instructions on how to configure it.

In addition to these changes, many rules have been fixed, problematic rules disabled, and new rules enabled.

## v7 -> v8 Migration Guide

### 1. Use `@goodeggs/toolkit`.

Uninstall `eslint`, `babel-eslint`, `prettier`, `eslint-plugin-goodeggs`, and any other ESLint plugins that are listed in the peer dependencies for this package.

Next, install `@goodeggs/toolkit` and replace any `eslint` scripts with `getk run lint-es <glob>` and `getk run fix-es <glob>`.

Finally, change the contents of `.prettierrc.js` to:

```js
module.exports = require('@goodeggs/toolkit/config/prettier');
```

### 2. Remove the `goodeggs/` prefix from all rules.

Edit your ESLint configuration and any inline overrides (run `grep -R "eslint-disable.*goodeggs\/" .` to find them).

Remove prefixes like so: `goodeggs/import-no-commonjs` becomes `import/no-commonjs`.

### 3. Update your project's eslint configuration.

Here's a baseline configuration that makes no assumptions about your environment or test framework, etc.:

```json
{
  "extends": ["plugin:goodeggs/recommended"]
}
```

You will likely want to extend this with more rules (e.g. React rules); you can find a full list of configurations [here](https://github.com/goodeggs/eslint-plugin-goodeggs/tree/master/src/config).

### 4. Configure `eslint-plugin-import`'s module resolver with your project's module settings.

We no longer automatically configure `eslint-plugin-goodeggs` with custom module directories. Module aliases are configured via Webpack, Babel, and other similar tools and specifying them in this repository has led to a tragedy-of-the-commons configuration that assumes implementation details and doesn't work particularly well for consumers.

If you use [`babel-plugin-module-resolver`](https://github.com/tleunen/babel-plugin-module-resolver) to create custom imports (e.g. in Garbanzo, imports like `nettle/*`), you must configure [`eslint-import-resolver-babel-module`](https://github.com/tleunen/eslint-import-resolver-babel-module) in your project.

Consumers that depend on the `local_modules` pattern provided by `babel-plugin-local-modules` should update their ESLint configuration to include the following configuration:

```js
settings: {
  'import/resolver': {
    node: {
      moduleDirectory: [
        // Default
        'node_modules',
        // Adds anything in the root directory (including local_modules) to the module lookup path
        '.',
      ],
    },
  },
},
```

For more information, see [this commit](https://github.com/goodeggs/eslint-plugin-goodeggs/commit/f398a340ef0f3077fa70f12f43f4eb0f4da5dc92).

### 5. Fix all lint errors.

This release fixes a slew of broken lint rules and introduces new rules that target problematic code, and so you may need to fix new errors you haven't seen before. We tried to enable rules that were autofixable, but you'll need to manually fix those that are not.

# [v7.2.0](https://github.com/goodeggs/best-practices/compare/v7.1.0...v7.2.0)

- Add `DT_DecoderDataResponse` (part of the DryRain API) to `newCap` exceptions

# [v7.1.0](https://github.com/goodeggs/best-practices/compare/v7.0.0...v7.1.0)

- Disable `prefer-reflect`. This rule is deprecated and we already disable it all over the place.
