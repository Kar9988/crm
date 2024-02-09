const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      api: {
        target: 'https://rmxtfurm45mw01.amocrm.ru',
        changeorigin: true
      },
      oauth: {
        target: 'https://test.gnzs.ru',
        changeorigin: true
      }

    }
  }
})
