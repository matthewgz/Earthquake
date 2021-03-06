const path = require("path");
const webpack = require("webpack");
const TersetJSPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    modules: [
      "react",
      "react-dom",
      "styled-components",
      "react-icons",
      "@react-google-maps/api"
    ]
  },
  mode: "production",
  optimization: {
    minimizer: [new TersetJSPlugin()]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};
