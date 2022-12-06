const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    proxy: {
      '^/login': {
        target: process.env.VUE_APP_API_URL,
        chagneOrigin: true,
      },
    },
  },
};
