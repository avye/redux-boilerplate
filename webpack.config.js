// var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './client/index.js'
  ],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ["react", "es2015", "babel-preset-stage-0"]
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }

  // plugins: [
  //   new CopyWebpackPlugin
  //     ([
  //       {
  //         from: __dirname + '/client/index.html',
  //         to: __dirname + '/dist/index.html'
  //       }
  //     ])
  // ]

}
