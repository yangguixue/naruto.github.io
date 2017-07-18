import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackBaseConfig from './webpack.base';

export default webpackBaseConfig({
  entry: path.resolve('./', 'src/main.js'),

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./', 'src/index.html'),
      // filename: path.resolve('./', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./dist",
    port: 4001,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
});
