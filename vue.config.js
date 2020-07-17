const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  css: {
   requireModuleExtension: true,
   loaderOptions: {
     postcss: {
      plugins: [
        require('precss'),
        require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 1920,
            unitPrecision: 3,
            propList: [
              "*"
            ],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
          }),
        require('cssnano')
      ],
     }
   }
 },

  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@assets", resolve("src/assets"))
          // 打包分析
      if (IS_PROD) {
        config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
          {
            analyzerMode: "static"
          }
        ]);
      }
  },

  lintOnSave: false
}