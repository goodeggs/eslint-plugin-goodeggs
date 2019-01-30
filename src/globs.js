/*
 * Common globs used across all Good Eggs projects.
 *
 * TODO(ndhoule): Copypasta'd from goodeggs-toolkit, extract this somewhere
 */

export const extensions = ['js', 'jsx', 'ts', 'tsx'];

export const src = {
  // All non-test source files.
  all: `**/!(?(*.)test?(.*)).{${extensions.join(',')}}`,
};

export const test = {
  // All test files of all scopes.
  all: `**/?(*.)test.?(*.){${extensions.join(',')}}`,
  e2e: `**/?(*.)test.e2e.{${extensions.join(',')}}`,
  smoke: `**/?(*.)test.smoke.{${extensions.join(',')}}`,
  unit: `**/?(*.)test.!(*.){${extensions.join(',')}}`,
};
