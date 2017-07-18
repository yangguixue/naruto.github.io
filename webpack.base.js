import path from 'path';
import webpack from 'webpack';

export default options => ({
  entry: path.resolve('./', 'src/main.js'),
  output: {
    path: path.resolve('./', 'dist'),
    filename: 'bundle.js'
  },
  plugins: options.plugins,

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },

  devServer: options.devServer,

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
})
