// [cache-loader 配置（webpack 5 弃用）]
/**
 * webpack 5 使用了持久性缓存，与 babel-loader 类似，所以不再需要此 loader 了
 */
module.exports = ({ config, resolve }) => {
  // const baseRule = config.module.rule('js').test(/.js|.tsx?$/)
  return () => {
    // baseRule
    //   .exclude
    //   .add(filepath => {
    //     // 不缓存 node_modules 下的文件
    //     return /node_modules/.test(filepath)
    //   })
    //   .end()
    //   .use('cache-loader')
    //   .loader('cache-loader')
    //   .options({
    //     // 缓存位置
    //     cacheDirectory: resolve('node_modules/.cache/babel')
    //   })
    //   .end()
  }
}
