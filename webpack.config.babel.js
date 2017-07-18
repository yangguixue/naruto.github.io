import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: path.resolve('./', 'src/main.js'),
  output: {
    path: path.resolve('./', 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },

  devServer: {
    contentBase: "./dist",
    port: 4001,
    historyApiFallback: true,
    inline: true,
    hot: true
  },

  module: {
    rules: [
      {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2015']
          }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options
        }
      }
    ]
  }
}
