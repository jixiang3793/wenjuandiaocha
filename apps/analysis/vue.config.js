module.exports = {
  // "parallel": true,
  // "configureWebpack": {
  //   "plugins": [
  //     // new VuetifyLoaderPlugin({
  //       // match (originalTag, { kebabTag, camelTag, path, component }) {
  //       //   console.log(kebabTag, camelTag);
  //       //   if (kebabTag.startsWith('index')) {
  //       //     return [camelTag, `import ${camelTag} from '@/components/index/${camelTag}.vue'`]
  //       //   }
  //       // }
  //     // })
  //     // new BundleAnalyzerPlugin()
  //   ],
  // },
  chainWebpack: (config) => {
  },
  devServer: {
    // contentBase: '../../../../build/resources/main/static/',
    compress: true,
    port: 9100,
    hot: false,
    // writeToDisk: true,
    proxy: "http://localhost:7001",
  },
  // outputDir: '../../../../build/resources/main/static/',
};
