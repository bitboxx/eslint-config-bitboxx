/* eslint-disable unicorn/no-unused-properties */
/* eslint-disable unicorn/prefer-module */
const RULE_SET = {
  error: 2,
  off: 0,
  warn: 1,
};

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'canonical/react',
    'plugin:prettier/recommended',
  ],
  overrides: [{ files: ['*.jsx'], parser: '@babel/eslint-parser' }],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': RULE_SET.off,
  },
  settings: {
    react: { version: 'detect' },
  },
};
