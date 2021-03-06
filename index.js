/* eslint-disable unicorn/prefer-module */

const RULE_SET = {
  error: 2,
  off: 0,
  warn: 1,
};

module.exports = {
  env: {
    es2021: true,
    // jest: true,
    node: true,
  },
  extends: [
    // https://github.com/gajus/eslint-config-canonical
    'canonical',
    // 'canonical/jest',
    'canonical/module',
    'canonical/node',
    'problems',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      // extends: ['canonical/json'],
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 'latest',
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  root: true,
  rules: {
    'arrow-body-style': [
      RULE_SET.error,
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'canonical/destructuring-property-newline': RULE_SET.off,
    'canonical/filename-match-regex': [
      RULE_SET.warn,
      '^[.A-Z]?[a-z]+(?:[A-Z][a-z]+)*$',
      false,
    ],
    'canonical/import-specifier-newline': RULE_SET.off,
  },
};
