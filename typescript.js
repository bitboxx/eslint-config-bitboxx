/* eslint-disable unicorn/prefer-module */
/* eslint-disable canonical/filename-match-regex */

const RULE_SET = {
  error: 2,
  off: 0,
  warn: 1,
};

module.exports = {
  extends: [require.resolve('./index.js'), 'canonical/typescript'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'unicorn/prefer-json-parse-buffer': RULE_SET.off
  }
};
