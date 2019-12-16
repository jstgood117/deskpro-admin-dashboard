module.exports = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.(gif|svg|jpg|png|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
      }
    ]
  }
};
