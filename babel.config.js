module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript',
    ['@babel/preset-env', {targets: {node: 'current'}}]
  ];

  const plugins = [
    "@babel/plugin-proposal-optional-chaining"
  ];

  return {
    presets,
    plugins,
  };
}