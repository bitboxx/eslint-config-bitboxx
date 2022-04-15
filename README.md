# Installation

`yarn add --dev eslint-config-bitboxx@github:bitboxx/eslint-config-bitboxx.git`

# Configuration

## JS

```
// .eslintrc.cjs

module.exports = {
  extends: ['eslint-config-bitboxx'],
};

```

## React / JSX

```
// .eslintrc.cjs

module.exports = {
  extends: ['eslint-config-bitboxx', 'eslint-config-bitboxx/react'],
};
```

```
// .babelrc.json

{
  "presets": ["@babel/preset-react"]
}
```
