# Installation & Configuration

`yarn add --dev eslint-config-bitboxx@github:bitboxx/eslint-config-bitboxx.git`

## JS

```
cat << EOF > .eslintrc.cjs
module.exports = {
  extends: ['eslint-config-bitboxx'],
};
EOF

```

## Typescript

```
cat << EOF > .eslintrc.cjs
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint-config-bitboxx'
  ],
  plugins: ['@typescript-eslint'],
};

EOF

```

## React / JSX

```
cat << EOF > .eslintrc.cjs
module.exports = {
  extends: ['eslint-config-bitboxx', 'eslint-config-bitboxx/react'],
};
EOF

cat << EOF > .babelrc.json
{
  "presets": ["@babel/preset-react"]
}
EOF
```

## React / JSX in a monorepo (root)

```
cat << EOF > .eslintrc.cjs
module.exports = {
  extends: ['eslint-config-bitboxx', 'eslint-config-bitboxx/react'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      rootMode: 'upward',
    },
  },
};
EOF

cat << EOF > babel.config.cjs
module.exports = {
  babelrcRoots: ['.', './packages/*'],
  presets: ['eslint-config-bitboxx/babel-preset-react'],
};
EOF
```

## Notes

Packages that are not being used, but must be included because some eslint plugins don't require them directly:

 - typescript
 - eslint-plugin-import
