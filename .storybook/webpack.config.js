const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.module.rules.push({
    test: /\.(gif|svg|jpg|png|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    loader: 'url-loader'
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};