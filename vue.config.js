module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-grace-design-system/'
    : '/',
    // chainWebpack: config => {
    //     config.plugin('optimize-css').tap(([options]) => {
    //         options.cssnanoOptions.preset[1].svgo = false
    //         return [options]
    //     })
    // },
}
