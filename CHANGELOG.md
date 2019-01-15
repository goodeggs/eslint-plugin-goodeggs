# Unreleased Changes

<!-- Put changelog messages that haven't yet been released here! -->

# [v7.2.0](https://github.com/goodeggs/best-practices/compare/v7.1.0...v7.2.0)

- Add `DT_DecoderDataResponse` (part of the DryRain API) to `newCap` exceptions

# [v7.1.0](https://github.com/goodeggs/best-practices/compare/v7.0.0...v7.1.0)

- Disable `prefer-reflect`. This rule is deprecated and we already disable it all over the place.

### BREAKING CHANGES

@ndhoule: These changes are all breaking, but we already follow them virtually everywhere, so I'm going to cheat and roll them into a minor release.

- Prefer double quotes in JSX. In practice we already override this via `eslint-{plugin,config}-prettier` or `eslintConfig` virtually everywhere.
- Error when triple-equals comparing to `null`. In practice we follow this virtually everywhere already.
