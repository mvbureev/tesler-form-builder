Object.assign(
  module.exports,
  require("./pluginCleanWebpack"),
  require("./pluginCopy"),
  require("./pluginDefine"),
  require("./pluginEsLint"),
  require("./pluginForkTsChecker"),
  require("./pluginHtml"),
  require("./pluginMiniCssExtract"),
  require("./pluginProvide"),
  require("./pluginMonaco"),
);