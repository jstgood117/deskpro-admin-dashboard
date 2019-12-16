module.exports = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf|svg)$/,
        loaders: ['url-loader']
      }
    ]
  }
};
