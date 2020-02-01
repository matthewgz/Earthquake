const path = require("path");
const webpack = require("webpack");
const TersetJSPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    modules: ["react", "react-dom", "styled-components"]
  },
  mode: "production",
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components"
  },
  resolve: {
    alias: {
      "styled-components": path.resolve("./node_modules/styled-components")
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
