import Vue from 'vue'
import App from './App.vue'

// 引用element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由(安装的是vue-router3版本而不是最新版，新版本会和vue2冲突)
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

Vue.config.productionTip = false
// 使用element ui
Vue.use(ElementUI)
// 使用路由
Vue.use(VueRouter)

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount('#app')
