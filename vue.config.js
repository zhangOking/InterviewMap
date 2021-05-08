const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack: (config) => {

  //   // 配置别名 alias
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('assets', resolve('src/assets'))
  //     .set('api', resolve('src/api'))
  //     .set('views', resolve('src/views'))
  //     .set('components', resolve('src/components'))
  // },

    configureWebpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          { loader: 'markdown-loader' },
          { loader: 'html-loader' }
        ]
      })
    }
  }
}
