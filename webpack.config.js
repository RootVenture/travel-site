// webpack needs an absolute path
var path = require("path");

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
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
