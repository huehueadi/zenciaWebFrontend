// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chatbot-widget.js', // This will be the file to embed
    library: 'chatbotWidget', // Exported global variable
    libraryTarget: 'umd', // So it works in different environments
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
