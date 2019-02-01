import recommended from './recommended';

export default {
  rules: {
    camelcase: ['error', {allow: ['^DT_.+']}],
    'new-cap': [
      'error',
      {
        ...recommended.rules['new-cap'][1],
        capIsNewExceptionPattern: '(dryrain.+|window)\\.DT_.+',
      },
    ],
  },
};
