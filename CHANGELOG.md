# Unreleased Changes

This is a significant update with several breaking changes.

- No longer bundle third-party eslint plugins in this package; instead, they are now peers, and it's the responsibility of the consumer to install them.
- Revert all namespaced rules to their stock values (e.g. `goodeggs/import-whatever` -> `import/whatever`)
- Rename default config from `goodeggs` to `recommended` (`plugin:goodeggs/goodeggs` -> `plugin:goodeggs/recommended`)
- Break flowtype configuration into `flowtype` config (`plugin:goodeggs/flowtype`)
- Break mocha configuration into `mocha` config (`plugin:goodeggs/mocha`)
- Break jest configuration into `jest` and `jestStrict` configurations (`plugin:goodeggs/jest` and `plugin:goodeggs/jestStrict`)
- Remove all stylistic rules (covered by `eslint-config-prettier`)
- Add React plugin and enable sane default rules that reflect current best practices and introduce some new ones that prevent common React performance errors.
- Disable new-cap rules for `unionized.JSONSchemaFactory` (previously we only permitted `JSONSchemaFactory`)
- Ops-specific rules:
  - Move ops-specific configuration into its own config (`plugin:goodeggs/ops`)
  - Disable new-cap rules `dryrain(Api).DT_*` invocations

### Migration path

There are two possible migration paths available.

#### Consume this package through `@goodeggs/toolkit` (recommended)

Remove all eslint and prettier dependencies from your project (`eslint`, `eslint-babel`, `eslint-plugin-*`, `eslint-config-*` `prettier`, etc.).

```sh
yarn remove eslint eslint-babel prettier
# Next, remove any packages starting in 'eslint-plugin-' and 'eslint-config-'
```

Install `@goodeggs/toolkit`:

```sh
yarn add --dev @goodeggs/toolkit
```

Replace any lint and formatting/fix scripts in your `package.json` with the goodeggs-toolkit equivalents; for example:

```diff
  {
    // ...
    "scripts": {
-     "lint": "eslint '**/*.js'",
+     "lint": "getk run lint-es",
-     "fmt": "eslint --fix '**/*.js'",
+     "fmt": "getk run fmt-es",
    },
    // ...
  }
```

#### Upgrade `eslint-plugin-goodeggs` and install peer dependencies (not recommended)

Remove all eslint and prettier dependencies from your project (`eslint`, `eslint-babel`, `eslint-plugin-*`, `eslint-config-*` `prettier`, etc.).

```sh
yarn remove eslint eslint-babel prettier
# Next, remove any packages starting in 'eslint-plugin-' and 'eslint-config-'
```

Next, install this plugin:

```sh
yarn add --dev eslint-plugin-goodeggs --latest
```

Next, resolve any peer dependency warnings output by the previous command by installing each package. Pay close attention to the versions; installing the incorrect version of any dependency may result in unexpected lint behavior.

> Note: If you're not using TypeScript, you can safely ignore the `typescript` peer dependency warning.


<!-- Put changelog messages that haven't yet been released here! -->

# [v7.2.0](https://github.com/goodeggs/best-practices/compare/v7.1.0...v7.2.0)

- Add `DT_DecoderDataResponse` (part of the DryRain API) to `newCap` exceptions

# [v7.1.0](https://github.com/goodeggs/best-practices/compare/v7.0.0...v7.1.0)

- Disable `prefer-reflect`. This rule is deprecated and we already disable it all over the place.

### BREAKING CHANGES

@ndhoule: These changes are all breaking, but we already follow them virtually everywhere, so I'm going to cheat and roll them into a minor release.

- Prefer double quotes in JSX. In practice we already override this via `eslint-{plugin,config}-prettier` or `eslintConfig` virtually everywhere.
- Error when triple-equals comparing to `null`. In practice we follow this virtually everywhere already.
