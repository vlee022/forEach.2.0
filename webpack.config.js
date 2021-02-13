const path = require('path')


module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, './client/index.js'),
    output : {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/build'
    },

    module : {
      rules : [
        {
          test : /\.jsx?/,
          exclude: /node_modules/,
          use : {
            loader: 'babel-loader',
            options: {
              presets : ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    devServer: {
      
       publicPath: '/build',
       proxy: {
           '/api': 'http://localhost:3000'
       },
      hot: true,
      // port: 8080,
  }
};

