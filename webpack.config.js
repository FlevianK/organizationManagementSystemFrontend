module.exports = {
  module: {
    rules: [
      {
        //  Webpack pipes js/jsx code through babel-loader for transforming ES6 down to ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};