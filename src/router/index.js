// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import HomePage from '../pages/Homepage'
import Illustrations from '../pages/Illustrations'
import Comics from '../pages/Comics'
import Favorites from '../pages/Favorites'

// 创建并且暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/HomePage',
      component: HomePage,
    },
    {
      path: '/Illustrations',
      component: Illustrations,
    },
    {
      path: '/Comics',
      component: Comics,
    },
    {
      path: '/Favorites',
      component: Favorites,
    },
  ],
})
