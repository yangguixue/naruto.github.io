import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackBaseConfig from './webpack.base';

export default webpackBaseConfig({

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./', 'src/index.html'),
      filename: path.resolve('./', 'index.html')
    }),
  ],

});
