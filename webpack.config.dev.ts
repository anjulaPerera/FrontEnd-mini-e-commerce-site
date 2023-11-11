const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'), // Adjust the path accordingly
        }
    },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following rules to .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript files
        },
          },
        {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
        test: /\.css$/, // Apply the following rules to .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for transpiling CSS files
    },
    ],
  },
};
