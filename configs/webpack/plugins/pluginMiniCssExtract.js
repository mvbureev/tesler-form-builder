const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].css",
  chunkFilename: "[id].css",
};

exports.miniCssExtractPlugin = new MiniCssExtractPlugin(config);
