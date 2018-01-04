const path = require('path');

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
    style: path.resolve(__dirname, '../src/assets/style/index.scss'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$)/,
        loader: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets: ['react'],
          },
      },
      {
        test: /\.css$|\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
  },
};

module.exports = config;
