## JS

```
// .eslintrc.cjs
module.exports = {
  extends: ['eslint-config-bitboxx'],
};

```

## React / JSX

```
// .eslintrc.cjs content
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
