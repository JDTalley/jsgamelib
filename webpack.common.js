const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  /*   plugins: [
    new HtmlWebpackPlugin({
      title: "JSGameLib",
      template: "./src/index.html",
      inject: "body",
    }),
  ], */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      name: "JSGameLib",
      type: "umd",
    },
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
