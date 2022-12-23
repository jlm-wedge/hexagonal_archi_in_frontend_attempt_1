module.exports = {
  devServer: {
    host: process.env.VUE_APP_DEV_SERVER_DOMAIN,
    port: process.env.VUE_APP_DEV_SERVER_PORT,
  },
  configureWebpack: {
    resolve: { symlinks: false },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Hexagonal archi"
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
}
