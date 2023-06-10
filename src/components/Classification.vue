<template>
  <div id="Classification">
    <!-- router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      :router="true"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <!-- 这里确保默认显示主页 -->
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="Illustrations">插画</el-menu-item>
      <el-menu-item index="Comics"> 漫画</el-menu-item>
      <el-menu-item index="Favorites">收藏</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Classification',
  data() {
    return {
      // 初始值给/ 表示根目录
      activeIndex: '/',
    }
  },
  methods: {},
}
</script>

<style scoped>
/* 控制element ui的分类框大小 */

.el-menu {
  margin-left: 300px;

  width: 320px;
}

/* 消除分类栏的下边框 */

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

/* 调整分类栏子项的大小 */

.el-menu.el-menu--horizontal .el-menu-item {
  width: 80px;

  height: 50px;

  font-size: 17px;
}

/* 消除未激活状态子项的下边框 */

.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}

/* 消除分类栏激活时子项的下边框，添加上边框，实现滑动效果 */

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;

  border-top: 4px solid #409eff;

  font-weight: 700;
}
</style>
