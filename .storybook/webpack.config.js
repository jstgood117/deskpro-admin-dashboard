const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  },{
    test: /\.(eot|ttf|woff|otf|woff2)$/,
    include: [path.resolve(__dirname, '../src/assets/fonts')],
    use: ['file-loader']
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};