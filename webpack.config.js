const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
// const  ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');  


module.exports = {
  entry: {
    shared: './client/js/shared.js',
  },
  output: {
  // The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
  // Local disk directory to store all your output files (Absolute path).
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].bundle.js',
  },
  plugins: [
    new UglifyJSPlugin(),
    // Automatically load modules instead of having to import or require them everywhere.
    new webpack.ProvidePlugin({}),
    new ExtractTextPlugin({
      filename: 'styles/site.css',
      disable: false,
      allChunks: false
    }),
    /* Copy static images from client folder to to public */
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'client/images'),  to: 'images/' }
    ]),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'client/service-worker.js'),
    // }),
  ],
  module: {
    rules: [
      /* babel-loader */
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          },
        }],
        exclude: /node_modules/
      },
      /* css-loader */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader?sourceMap','resolve-url-loader', 'sass-loader?sourceMap']
        })
      },
      /* file-loader */
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            useRelativePath:true,
            name: '[name].[ext]',
            outputPath: '/'
          },
        }],
      },
      /* load fonts by file-loader */
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            useRelativePath:true,
            name: '[name].[ext]',
            outputPath: '/'
          },
        }],
      }
    ]// rules
  }// module
};
