const path = require("path");
const webpack = require("webpack");
const TersetJSPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    modules: ["react", "react-dom", "styled-components"]
  },
  mode: "production",
  resolve: {
    alias: {
      "styled-components": require.resolve("styled-components")
    }
  },
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
