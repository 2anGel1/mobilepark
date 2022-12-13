module.exports = defineConfig({
    pluginOptions: {
      electronBuilder: {
        externals: ['fs/promises'],
      }
    }
  })