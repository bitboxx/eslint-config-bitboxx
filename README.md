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
