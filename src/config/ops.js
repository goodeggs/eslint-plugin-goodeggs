import recommended from './recommended';

const existingNewCapRule = recommended.rules['new-cap'][1];

export default {
  // Adds support for `babel-plugin-local-modules`.
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
  rules: {
    camelcase: ['error', {allow: ['^DT_.+']}],
    'new-cap': [
      'error',
      {
        ...existingNewCapRule,
        capIsNewExceptionPattern: [
          '(',
          ['\\.DT_.+', existingNewCapRule.capIsNewExceptionPattern]
            .map((regexp) => `(${regexp})`)
            .join('|'),
          ')',
        ].join(''),
      },
    ],
  },
};
