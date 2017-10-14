// webpack needs an absolute path
var path = require("path");

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  // babel object set up
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        },
        // only want webpack to apply to js files (REGEX)
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
