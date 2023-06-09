const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 修改配置，禁用eslint的多单词命名规则
  lintOnSave: false,
})
