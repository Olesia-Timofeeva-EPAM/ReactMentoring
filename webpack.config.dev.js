const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dev')
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', 'css']
  },
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 9000,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [    
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {test:'/\.jsx$/' , loader:'babel-loader', exclude: '/node_modules/'},
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [          
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
            'css-loader'
        ]
    },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' }
          },
          'image-webpack-loader'
        ],
      }
    ]
  }
};
   