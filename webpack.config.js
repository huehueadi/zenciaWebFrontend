const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry file where the bundling starts
  output: {
    path: path.resolve(__dirname, 'dist'),  // The output directory
    filename: 'chatbot-widget.js',  // The output file name
    library: 'chatbotWidget',  // The global variable that the library will be accessible as
    libraryTarget: 'umd',  // Universal Module Definition for compatibility
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Files to be processed by Babel
        exclude: /node_modules/,  // Don't process files in node_modules
        use: {
          loader: 'babel-loader',  // Use Babel loader for JavaScript and JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Babel presets for React and modern JavaScript
          },
        },
      },
      {
        test: /\.css$/,  // Files to be processed by CSS loader
        use: ['style-loader', 'css-loader'],  // Inject CSS into the DOM
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Automatically resolve these file extensions
  },
  externals: {
    react: 'React',  // Don't bundle React, it should be included externally
    'react-dom': 'ReactDOM',  // Same for ReactDOM
  },
  devtool: 'source-map',  // Generate source maps for debugging
};
