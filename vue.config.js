const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/common/css/var.less') //全局引入的less文件
      ]
    })
}

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  configureWebpack: config => {
    Object.assign(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      }
    })
  }
}
