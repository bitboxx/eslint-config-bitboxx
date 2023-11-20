/* eslint-disable unicorn/prefer-module */
/* eslint-disable canonical/filename-match-regex */

const RULE_SET = {
  error: 2,
  off: 0,
  warn: 1,
};

const commonRules = {
  'arrow-body-style': [
    RULE_SET.error,
    'as-needed',
    { requireReturnForObjectLiteral: false },
  ],
  'canonical/destructuring-property-newline': RULE_SET.off,
  'canonical/filename-match-regex': [
    RULE_SET.warn,
    { regex: '^[.A-Z]?[a-z]+(?:[A-Z][a-z]+)*$' },
  ],
  'canonical/import-specifier-newline': RULE_SET.off,
  'no-console': [RULE_SET.warn, { allow: ['info', 'debug', 'error'] }],
  'sort-destructure-keys/sort-destructure-keys': [
    RULE_SET.warn,
    { caseSensitive: false },
  ],
};

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  overrides: [
    {
      extends: ['canonical/json'],
      files: ['**/*.json', '**/*.json5'],
      parser: 'jsonc-eslint-parser',
    },
    {
      extends: ['canonical/auto', 'plugin:prettier/recommended'],
      files: ['**/*.js'],
      parserOptions: {
        ecmaFeatures: {
          ecmaVersion: 'latest',
          impliedStrict: true,
        },
        sourceType: 'module',
      },
      plugins: ['sort-destructure-keys'],
      rules: commonRules,
    },
    {
      extends: ['canonical/auto', 'canonical/typescript'],
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['sort-destructure-keys'],
      rules: {
        ...commonRules,
        // 2023-11-18: Broken
        'unicorn/consistent-function-scoping': RULE_SET.off,
        'unicorn/prefer-json-parse-buffer': RULE_SET.off,
      },
    },
  ],
  root: true,
};
