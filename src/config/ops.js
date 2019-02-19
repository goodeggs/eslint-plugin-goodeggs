import recommended from './recommended';

const existingNewCapRule = recommended.rules['new-cap'][1];

export default {
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
