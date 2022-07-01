/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line no-unused-vars
const RULE_SET = {
  error: 2,
  off: 0,
  warn: 1,
};

module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:solid/recommended', 'plugin:prettier/recommended'],
  overrides: [{ files: ['*.jsx'], parser: '@babel/eslint-parser' }],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['solid'],
};
