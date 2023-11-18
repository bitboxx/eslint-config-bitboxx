/* eslint-disable import/no-dynamic-require */
/* eslint-disable n/global-require */
/* eslint-disable canonical/filename-match-regex */
const PRESET_REACT = '@babel/preset-react';

module.exports = (_, options = {}) => {
  const presetReactOptions = options[PRESET_REACT] ?? {};

  return {
    presets: [
      [
        require(PRESET_REACT),
        {
          runtime: 'automatic',
          ...presetReactOptions,
        },
      ],
    ],
  };
};
