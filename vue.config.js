const keysTransformer = require('ts-transformer-keys/transformer').default

module.exports = {
  chainWebpack: config => {
    ['ts', 'tsx'].forEach(rule => {
      config.module
        .rule(rule)
        .use('ts-loader')
        .tap(options => Object.assign(options, {
          compiler: 'ttypescript',
          transpileOnly: false
        }))
    })
  }
}
